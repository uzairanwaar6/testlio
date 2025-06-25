'use strict';

const { responses, paging } = require('../utils');
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
  try {
    const {
      id,
      revisionA,
      revisionB
    } = context.query;

    const issue = await Issue.findByPk(id);
    const revisions = await IssueHistory.find((history) => {
      history.row_version = {
        [Op.eq]: [{ issue_id: id }],
        [Op.between]: [{ row_version: revisionA }, { row_version: revisionB }]
      }
    });



    responses.success(context, {
      data: {
        issue,
        before: revisions.first((revision) => revision.row_version == revisionA),
        after: revisions.first((revision) => revision.row_version == revisionB),
        revisions
      }
    });

  } catch (error) {
    console.error(error);
    responses.badRequest(context, ['Failed to fetch revisions', error]);
  }
};

Issues.revisions = async (context) => {
  try {
    const {
      id
    } = context.query;

    const revisions = await IssueHistory.find((history) => {
      history.row_version = {
        [Op.eq]: [{ issue_id: id }]
      }
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
  const issue = await Issue.findByPk(context.params.id);
  responses.success(context, { issue });
};

Issues.update = async (context) => {
  const issue = await Issue.findByPk(context.params.id);
  responses.success(context, { issue });
};


module.exports = Issues;
