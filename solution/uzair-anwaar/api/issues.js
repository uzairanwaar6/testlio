'use strict';

const { responses, paging, HttpError } = require('../utils');
const { Issue, IssueHistory } = require('../models');
const { Op } = require('sequelize');



const Issues = {};

Issues.list = async (context) => {
  try {
    const {
      title,
      description
    } = context.query;

    const { offset, pn, ps } = paging.applyPaging(context.query);

    // Applying Filters...
    const where = {};

    if (title) {
      where.title = { [Op.like]: `%${title}%` };
    }

    if (description) {
      where.description = { [Op.like]: `%${description}%` };
    }

    const { count, rows } = await Issue.findAndCountAll({
      where,
      offset,
      limit: ps,
      order: [['created_at', 'DESC']]
    });

    responses.success(context, {
      total: count,
      page: pn,
      pageSize: ps,
      data: rows
    });

  } catch (error) {
    console.error(error);
    responses.badRequest(context, ['Failed to fetch issues', error]);
  }
};

Issues.issue_revisions = async (context) => {
  const { id, revisionA, revisionB } = context.params;

  const issue = await Issue.findByPk(id);

  const revisions = await IssueHistory.findAll({
    where: {
      issue_id: id,
      row_version: {
        [Op.between]: [revisionA, revisionB]
      }
    },
    order: [['row_version', 'ASC']]
  });

  if (!revisions || revisions.length === 0) {
    return responses.success(context, {
      issue,
      before: null,
      after: null,
      changes: {},
      revisions: []
    });
  }

  let before = revisions.find(r => String(r.row_version) === String(revisionA));
  let after = revisions.find(r => String(r.row_version) === String(revisionB));

  if (!before) {

    before = revisions.reduce((earliest, current) => {
      return (!earliest || current.row_version < earliest.row_version) ? current : earliest;
    }, null);
  }

  if (!after) {

    after = revisions.reduce((latest, current) => {
      return (!latest || current.row_version > latest.row_version) ? current : latest;
    }, null);
  }

  // Compute diff
  let changes = {};
  if (before && after) {
    const keys = new Set([...Object.keys(before.dataValues), ...Object.keys(after.dataValues)]);

    keys.forEach(key => {
      if (key === 'id'
        || key === 'changed_at'
        || key === 'row_version'
        || key === 'issue_id'
        || key === 'created_at'
        || key === 'updated_at')
        return;

      const beforeVal = before[key];
      const afterVal = after[key];

      if (beforeVal !== afterVal) {
        changes[key] = { before: beforeVal, after: afterVal };
      }
    });
  }

  // Response
  return responses.success(context, {
    issue,
    before,
    after,
    changes,
    revisions
  });
};


Issues.revisions = async (context) => {
  try {
    const {
      id
    } = context.params;

    const revisions = await IssueHistory.findAll({
      where: {
        issue_id: { [Op.eq]: id }
      },
      order: [['row_version', 'DESC']]
    });

    responses.success(context, {
      data: revisions
    });

  } catch (error) {
    console.error(error);
    responses.badRequest(context, ['Failed to fetch revisions', error]);
  }
};

Issues.get = async (context) => {
  const issue = await Issue.findByPk(context.params.id);
  responses.success(context, { issue });
};

Issues.create = async (context) => {
  const { title, description } = context.request.body;

  if (!title || typeof title !== 'string' || title.trim().length === 0)
    throw new HttpError('Title is required and must be a non-empty string.');

  if (!description || typeof description !== 'string' || description.trim().length === 0)
    throw new HttpError('Description is required and must be a non-empty string.');


  const entity = await Issue.create({
    title: title.trim(),
    description: description.trim(),
    created_by: context.state.user.email
  });

  return responses.success(context, { data: entity });
};

Issues.update = async (context) => {
  const id = context.params.id;
  const { title, description } = context.request.body;

  const issue = await Issue.findByPk(id);
  if (!issue)
    throw new HttpError('Issue not found', 404);

  if (title !== undefined && (typeof title !== 'string' || !title.trim()))
    throw new HttpError('Title must be a non-empty string if provided.');

  if (description !== undefined && (typeof description !== 'string' || !description.trim()))
    throw new HttpError('Description must be a non-empty string if provided.');

  if (title !== undefined) issue.title = title.trim();
  if (description !== undefined) issue.description = description.trim();

  issue.updated_by = context.state.user.email;
  await issue.save();

  //const issue = await Issue.findByPk(context.params.id);
  responses.success(context, { issue });
};


module.exports = Issues;
