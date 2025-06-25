'use strict';

module.exports = {
  success: (ctx, data) => {
    ctx.status = data ? 200 : 204;
    ctx.body = data || null;
  },

  badRequest: (ctx, errors) => {
    ctx.status = 400;
    ctx.body = {
      message: 'Check your request parameters',
      errors
    };
  },

  notFound: (ctx) => {
    ctx.status = 404;
    ctx.body = { message: 'Resource was not found' }; // fixed typo: messsage → message
  },

  unauthorized: (ctx, errors = null) => {
    ctx.status = 401;
    ctx.body = {
      message: 'Authentication failed',
      errors
    };
  }
};
