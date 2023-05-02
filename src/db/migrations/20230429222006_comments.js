/**
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("comments", (table) => {
      table.increments("id").primary();
      table.integer("users_id").notNullable();
      table.integer("posts_id").notNullable();
      table.string("comment_body").notNullable();
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("comments");
  };
