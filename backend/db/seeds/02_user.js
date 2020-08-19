const knex = require('knex');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const tableNames = require('../../src/constants/tableNames');

/**
 *
 * @param {knex} knex
 */

exports.seed = async (knex) => {
  await knex(tableNames.user).del();

  const password = crypto.randomBytes(12).toString('hex');
  const user = {
    username: 'test',
    password_hash: await bcrypt.hash(password, 12),
    email: 'test@mail.com',
    user_type_id: 1,
  };

  await knex(tableNames.user).insert(user);

  console.log(`The password is: ${password}\n`);
};
