const knex = require('knex');
const tableNames = require('../../src/constants/tableNames');
const orderedTableNames = require('../../src/constants/orderedTableNames');
const {
  addDefaultColumns,
  addReferenceById,
  addTypeTable,
  addMediaTable,
} = require('../../src/lib/tableUtils');

/**
 * @param {knex} knex
 */

exports.up = async (knex) => {
  await Promise.all([
    await addTypeTable(knex, tableNames.user_type),
    await addTypeTable(knex, tableNames.fitness_program_type),
  ]);
  await knex.schema.createTable(tableNames.user, (table) => {
    table.increments().unsigned().notNullable();
    table.string('username').notNullable().unique();
    table.string('password_hash').notNullable();
    table.string('email', 320).notNullable().unique();
    addReferenceById(table, tableNames.user_type);
    table.dateTime('last_login', false);
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.fitness_program, (table) => {
    table.increments().unsigned().notNullable();
    addReferenceById(table, tableNames.user);
    table.string('name').notNullable().unique();
    table.string('description', 1000);
    addReferenceById(table, tableNames.fitness_program_type);
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.fitness_program_info, (table) => {
    table.increments().unsigned().notNullable();
    addReferenceById(table, tableNames.fitness_program);
    addReferenceById(table, tableNames.user);
    table.float('purchase_price', 8);
    table.dateTime('purchased_at', false);
    addDefaultColumns(table);
  });
  await addMediaTable(
    knex,
    tableNames.fitness_program_image,
    'image_url',
    tableNames.fitness_program
  );
  await addMediaTable(
    knex,
    tableNames.fitness_program_video,
    'video_url',
    tableNames.fitness_program
  );
};

exports.down = async (knex) => {
  await Promise.all(
    [...orderedTableNames].map((tableName) =>
      knex.schema.dropTableIfExists(tableName)
    )
  );
};
