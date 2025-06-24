'use strict';

module.exports = {
    success: (context, data) => {
        context.body = data;
        context.status = data ? 200 : 204;
    },
    badRequest: (context, errors) => {
        context.body = {
            message: 'Check your request parameters',
            errors: errors
        };
        context.status = 400;
    },
    notFound: (context) => {
        context.body = { messsage: 'Resource was not found' };
        context.status = 404;
    },
    unauthorized: (contexterrors) => {
        context.body = {
            message: 'Authentication failed',
            errors: errors
        };
        context.status = 401;
    }
};
