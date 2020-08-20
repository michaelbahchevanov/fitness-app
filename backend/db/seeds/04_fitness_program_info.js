const knex = require('knex');
const tableNames = require('../../src/constants/tableNames');

/**
 *
 * @param {knex} knex
 */

exports.seed = async (knex) => {
  await knex(tableNames.fitness_program_info).del();

  const programInfo = {
    fitness_program_id: 1,
    user_id: 1,
    purchase_price: 66.99,
    purchased_at: Date.now(),
  };
  await knex(tableNames.fitness_program_info).insert(programInfo);
};
