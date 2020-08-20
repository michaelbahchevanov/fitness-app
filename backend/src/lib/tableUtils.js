const tableNames = require('../constants/tableNames');

const addDefaultColumns = (table) => {
  table.timestamps(false, true);
  table.boolean('archived').notNullable().defaultTo(false);
};

const addReferenceById = (
  table,
  foreignTableName,
  notNullable = true,
  columnName = ''
) => {
  const def = table
    .integer(`${columnName || foreignTableName}_id`)
    .unsigned()
    .references('id')
    .inTable(foreignTableName);

  if (notNullable) {
    def.notNullable();
  }
  return def;
};

const addTypeTable = (knex, tableName) => {
  return knex.schema.createTable(tableName, (table) => {
    table.increments().unsigned().notNullable();
    table.string('name').notNullable().unique();
  });
};

const addMediaTable = (knex, tableName, columnNameForUrl, columnName) => {
  return knex.schema.createTable(tableName, (table) => {
    table.increments().unsigned().notNullable();
    table.string(columnNameForUrl, 2000).notNullable();
    addReferenceById(table, columnName);
    addDefaultColumns(table);
  });
};

module.exports = {
  addDefaultColumns,
  addMediaTable,
  addReferenceById,
  addMediaTable,
  addTypeTable,
};
