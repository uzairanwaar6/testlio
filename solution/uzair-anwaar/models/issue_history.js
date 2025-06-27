'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('./connection'); 


const IssueHistory = sequelize.define('IssueHistory', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    issue_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    operation: {
      type: DataTypes.ENUM('create', 'update', 'delete'),
      allowNull: false,
      defaultValue: 'update',
    },
    row_version: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    changed_by: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    changed_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'issues_history',
    timestamps: false,
    underscored: true,
  });


  IssueHistory.associate = function(models) {
    IssueHistory.belongsTo(models.Issue, {
      foreignKey: 'issue_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  };

module.exports = IssueHistory;
