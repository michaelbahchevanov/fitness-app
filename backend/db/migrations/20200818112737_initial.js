const knex = require('knex');
const tableNames = require('../../src/constants/tableNames');
const orderedTableNames = require('../../src/constants/orderedTableNames');

const addDefaultColumns = (table) => {
  table.timestamps(false, true);
  table.boolean('archived').notNullable();
};

const addReferenceById = (table, foreignTableName) => {
  table
    .integer(`${foreignTableName}_id`)
    .unsigned()
    .references('id')
    .inTable(foreignTableName)
    .onDelete('cascade');
};

const addTypeTable = (knex, tableName) => {
  return knex.schema.createTable(tableName, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    addDefaultColumns(table);
  });
};

const addMediaTable = (knex, tableName, columnNameForUrl) => {
  return knex.schema.createTable(tableName, (table) => {
    table.increments().notNullable();
    table.string(columnNameForUrl, 2000).notNullable();
    addReferenceById(table, tableNames.fitness_program);
    addDefaultColumns(table);
  });
};

/**
 * @param {knex} knex
 */

exports.up = async (knex) => {
  await Promise.all([
    await addTypeTable(knex, tableNames.user_type),
    await addTypeTable(knex, tableNames.fitness_program_type),
  ]);
  await knex.schema.createTable(tableNames.user, (table) => {
    table.increments().notNullable();
    table.string('username').notNullable().unique();
    table.string('password_hash').notNullable();
    table.string('email', 320).notNullable().unique();
    addReferenceById(table, tableNames.user_type);
    table.dateTime('last_login', false);
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.fitness_program, (table) => {
    table.increments().notNullable();
    addReferenceById(table, tableNames.user);
    table.string('name').notNullable().unique();
    table.string('description', 1000);
    addReferenceById(table, tableNames.fitness_program_type);
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.fitness_program_info, (table) => {
    table.increments().notNullable();
    addReferenceById(table, tableNames.fitness_program);
    table.float('purchase_price', 8);
    table.dateTime('purchased_at', false);
    addDefaultColumns(table);
  });
  await addMediaTable(knex, tableNames.fitness_program_image, 'image_url');
  await addMediaTable(knex, tableNames.fitness_program_video, 'video_url');
};

exports.down = async (knex) => {
  await Promise.all(
    [...orderedTableNames].map((tableName) => knex.schema.dropTable(tableName))
  );
};
