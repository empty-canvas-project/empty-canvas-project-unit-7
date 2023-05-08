/**
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("posts", (table) => {
      table.increments("id").primary();
      table.integer("user_id").references('id').inTable('users')
      table.string("content")
      table.string("artist")
      table.string("title")
      table.string("cover")
      table.string("preview")
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("posts");
  };
