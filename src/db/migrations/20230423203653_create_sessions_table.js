// Don't worry about (or touch) this file!
// This can be automatically created by the knex session store
// However, we want to make sure it's generated with all the other tables

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('sessions', (table) => {
  table.string('sid').notNullable().primary();
  table.json('sess').notNullable();
  table.timestamp('expired').notNullable().index();
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('sessions');
