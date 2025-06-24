'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('./connection'); 


const IssueHistory = sequelize.define('IssueHistory', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  issue_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  column_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  old_value: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  new_value: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  operation: {
    type: DataTypes.ENUM('INSERT', 'UPDATE', 'DELETE'),
    allowNull: false
  },
  changed_by: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  changed_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  row_version: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  }
}, {
  tableName: 'issues_history',
  timestamps: false
});

IssueHistory.associate = function (models) {
  IssueHistory.belongsTo(models.Issue, {
    foreignKey: 'issue_id',
    as: 'issue'
  });
};

module.exports = IssueHistory;
