'use strict';

module.exports = {
  success: (context, data) => {
    context.status = data ? 200 : 204;
    context.body = data || null;
  },

  badRequest: (context, errors) => {
    context.status = 400;
    context.body = {
      message: 'Check your request parameters',
      errors
    };
  },

  notFound: (context) => {
    context.status = 404;
    context.body = { message: 'Resource was not found' }; // fixed typo: messsage → message
  },

  unauthorized: (context, errors = null) => {
    context.status = 401;
    context.body = {
      message: 'Authentication failed',
      errors
    };
  }
};
