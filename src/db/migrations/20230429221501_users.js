/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("username").notNullable().unique();
    table.string("password_hash").notNullable();
    table.timestamps(true, true);
    // table.string("name").notNullable();
    // table.string("email").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
