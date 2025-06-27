'use strict';
require('dotenv').config();
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    

    await queryInterface.bulkInsert('users', [
      {
        first_name: process.env.ADMIN_FIRST_NAME,
        last_name: process.env.ADMIN_LAST_NAME,
        email: process.env.ADMIN_EMAIL,
        password: await bcrypt.hash(process.env.ADMIN_PASSWORD, 10),
        created_by: process.env.ADMIN_EMAIL,
        updated_by: null,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', { email: 'admin@testlio.com' });
  }
};
