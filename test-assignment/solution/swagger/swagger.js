const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
    },
    servers: [{ url: 'http://localhost:8080' }],
  },
  apis: ['./routes.js'], // ✅ this is important!
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
