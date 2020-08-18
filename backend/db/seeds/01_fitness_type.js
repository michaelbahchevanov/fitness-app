const knex = require('knex');
const tableNames = require('../../src/constants/tableNames');

/**
 * @param {knex} knex
 */

exports.seed = async (knex) => {
  const fitnessProgramType = knex(tableNames.fitness_program_type);

  await fitnessProgramType.del();
  await fitnessProgramType.insert([
    {
      name: 'WeightLoss',
    },
    {
      name: 'Bulking',
    },
    {
      name: 'Cutting',
    },
    {
      name: 'Cardio',
    },
  ]);
};
