const knex = require('knex');
const tableNames = require('../../src/constants/tableNames');

/**
 *
 * @param {knex} knex
 */

exports.seed = async (knex) => {
  const mediaTables = [
    tableNames.fitness_program_image,
    tableNames.fitness_program_video,
  ];
  await mediaTables.reduce(async (promise, tableName) => {
    await promise;
    return knex(tableName).del();
  }, Promise.resolve());

  const image = {
    fitness_program_id: 1,
    image_url: 'http://www.example.com/',
  };

  const video = {
    fitness_program_id: 1,
    video_url: 'http://www.example.com/',
  };

  await knex(tableNames.fitness_program_video).insert(video);
  await knex(tableNames.fitness_program_image).insert(image);
};
