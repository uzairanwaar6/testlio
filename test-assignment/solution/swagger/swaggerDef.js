module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'Issues API',
    version: '1.0.0',
    description: 'Documentation for Issues API',
  },
  servers: [
    {
      url: 'http://localhost:8080',
    },
  ],

    apis: ['../routes.js', '../index.js'], 
};
