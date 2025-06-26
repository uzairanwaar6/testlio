'use strict';

/** @type {import('sequelize-cli').Migration} */


module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 1. Create issues table
    await queryInterface.createTable('issues', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      created_by: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_by: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });

    // 2. Create issues_history table
     await queryInterface.createTable('issues_history', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      issue_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      // Snapshot columns
      title: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      created_by: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      updated_by: {
        type: Sequelize.STRING(100),
        allowNull: true
      },     
      operation: {
        type: Sequelize.ENUM('create', 'update', 'delete'),
        allowNull: false,
        defaultValue: 'update'
      },
      row_version: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      changed_by: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      changed_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    await queryInterface.addIndex('issues_history', ['issue_id']);
    await queryInterface.addIndex('issues_history', ['row_version']);

    // 3. Add FK from issues_history → issues
    await queryInterface.addConstraint('issues_history', {
      fields: ['issue_id'],
      type: 'foreign key',
      name: 'fk_issues_history_issue_id',
      references: {
        table: 'issues',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    // 4. Create Triggers (INSERT, UPDATE, DELETE)

    // Note: row_version is calculated per issue_id
    const createTrigger = async (name, sql) => {
      await queryInterface.sequelize.query(`DROP TRIGGER IF EXISTS ${name}`);
      await queryInterface.sequelize.query(sql);
    };

    // AFTER INSERT trigger
    await createTrigger('trg_issues_after_insert', `
    CREATE TRIGGER trg_issues_after_insert
      AFTER INSERT ON issues
      FOR EACH ROW
      BEGIN
        DECLARE version INT DEFAULT 1;

        INSERT INTO issues_history (
          issue_id,
          title,
          description,
          created_by,
          updated_by,
          operation,
          changed_by,
          changed_at,
          row_version
        )
        VALUES (
          NEW.id,
          NEW.title,
          NEW.description,
          NEW.created_by,
          NEW.updated_by,
          'create',
          NEW.created_by,
          NOW(),
          version
        );
      END;
    `);

    // AFTER UPDATE trigger
    await createTrigger('trg_issues_after_update', `
    CREATE TRIGGER trg_issues_after_update
      AFTER UPDATE ON issues
      FOR EACH ROW
      BEGIN
        DECLARE version INT;

        SELECT IFNULL(MAX(row_version), 0) + 1
        INTO version
        FROM issues_history
        WHERE issue_id = NEW.id;

        INSERT INTO issues_history (
          issue_id,
          title,
          description,
          created_by,
          updated_by,
          operation,
          changed_by,
          changed_at,
          row_version
        )
        VALUES (
          NEW.id,
          NEW.title,
          NEW.description,
          NEW.created_by,
          NEW.updated_by,
          'update',
          NEW.updated_by,
          NOW(),
          version
        );
      END;

    `);

    // AFTER DELETE trigger
    await createTrigger('trg_issues_after_delete', `
    CREATE TRIGGER trg_issues_after_delete
      AFTER DELETE ON issues
      FOR EACH ROW
      BEGIN
        DECLARE version INT;

        SELECT IFNULL(MAX(row_version), 0) + 1
        INTO version
        FROM issues_history
        WHERE issue_id = OLD.id;


        INSERT INTO issues_history (
          issue_id,
          title,
          description,
          created_by,
          updated_by,
          operation,
          changed_by,
          changed_at,
          row_version
        )
        VALUES (
          OLD.id,
          OLD.title,
          OLD.description,
          OLD.created_by,
          OLD.updated_by,
          'delete',
          OLD.updated_by,
          NOW(),
          version
        );
      END;`);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('DROP TRIGGER IF EXISTS trg_issues_after_insert;');
    await queryInterface.sequelize.query('DROP TRIGGER IF EXISTS trg_issues_after_update;');
    await queryInterface.sequelize.query('DROP TRIGGER IF EXISTS trg_issues_after_delete;');

    await queryInterface.dropTable('issues_history');
    await queryInterface.dropTable('issues');
  }
};
