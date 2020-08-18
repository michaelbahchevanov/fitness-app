const knex = require('knex');
const tableNames = require('../../src/constants/tableNames');

/**
 * @param {knex} knex
 */

exports.seed = async (knex) => {
  const userTypeTable = knex(tableNames.user_type);

  await userTypeTable.del();
  await userTypeTable.insert([
    {
      name: 'Admin',
    },
    {
      name: 'User',
    },
  ]);
};
