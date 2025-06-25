'use strict';

const respond = require('../utils/responses');
const baseUrl = 'http://localhost:8080';

module.exports = (context) => {
  respond.success(context, {
    discovery: baseUrl
  });
};
