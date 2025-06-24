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
        autoIncrement: true,
        primaryKey: true
      },
      issue_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      column_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      old_value: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      new_value: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      operation: {
        type: Sequelize.ENUM('INSERT', 'UPDATE', 'DELETE'),
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
      },
      row_version: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      }
    });

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
        issue_id, column_name, old_value, new_value, operation, changed_by, changed_at, row_version
      )
      VALUES 
        (NEW.id, 'title', NULL, NEW.title, 'INSERT', NEW.created_by, NOW(), version),
        (NEW.id, 'description', NULL, NEW.description, 'INSERT', NEW.created_by, NOW(), version),
        (NEW.id, 'created_by', NULL, NEW.created_by, 'INSERT', NEW.created_by, NOW(), version);
    END;
    `);

    // AFTER UPDATE trigger
    await createTrigger('trg_issues_after_update', `
    CREATE TRIGGER trg_issues_after_update
    AFTER UPDATE ON issues
    FOR EACH ROW
    BEGIN
      DECLARE version INT;

      SELECT IFNULL(MAX(row_version), 0) + 1 INTO version FROM issues_history WHERE issue_id = NEW.id;

      IF NOT (OLD.title <=> NEW.title) THEN
        INSERT INTO issues_history VALUES (NULL, NEW.id, 'title', OLD.title, NEW.title, 'UPDATE', NEW.updated_by, NOW(), version);
      END IF;

      IF NOT (OLD.description <=> NEW.description) THEN
        INSERT INTO issues_history VALUES (NULL, NEW.id, 'description', OLD.description, NEW.description, 'UPDATE', NEW.updated_by, NOW(), version);
      END IF;

      IF NOT (OLD.updated_by <=> NEW.updated_by) THEN
        INSERT INTO issues_history VALUES (NULL, NEW.id, 'updated_by', OLD.updated_by, NEW.updated_by, 'UPDATE', NEW.updated_by, NOW(), version);
      END IF;
    END;
    `);

    // AFTER DELETE trigger
    await createTrigger('trg_issues_after_delete', `
    CREATE TRIGGER trg_issues_after_delete
    AFTER DELETE ON issues
    FOR EACH ROW
    BEGIN
      DECLARE version INT;

      SELECT IFNULL(MAX(row_version), 0) + 1 INTO version FROM issues_history WHERE issue_id = OLD.id;

      INSERT INTO issues_history (
        issue_id, column_name, old_value, new_value, operation, changed_by, changed_at, row_version
      )
      VALUES 
        (OLD.id, 'title', OLD.title, NULL, 'DELETE', OLD.updated_by, NOW(), version),
        (OLD.id, 'description', OLD.description, NULL, 'DELETE', OLD.updated_by, NOW(), version),
        (OLD.id, 'created_by', OLD.created_by, NULL, 'DELETE', OLD.updated_by, NOW(), version);
    END;
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('DROP TRIGGER IF EXISTS trg_issues_after_insert;');
    await queryInterface.sequelize.query('DROP TRIGGER IF EXISTS trg_issues_after_update;');
    await queryInterface.sequelize.query('DROP TRIGGER IF EXISTS trg_issues_after_delete;');

    await queryInterface.dropTable('issues_history');
    await queryInterface.dropTable('issues');
  }
};
