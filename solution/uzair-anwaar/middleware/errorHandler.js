const { HttpError } = require('../utils');

module.exports = async (context, next) => {
    try {
        await next(); 
    } catch (error) {
        
        const status = error instanceof HttpError ? error.statusCode : 500;

        
        console.error('Error caught by middleware:', {
            name: error.name,
            message: error.message,
            stack: error.stack,
            ...(error.details ? { details: error.details } : {})
        });

        // Send a structured response to the client
        context.status = status;
        context.body = {
            error: {
                message: error.message || 'Internal Server Error',
                ...(error.details ? { details: error.details } : {}),
            }
        };
    }
};
