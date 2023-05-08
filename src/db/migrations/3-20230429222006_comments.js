/**
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("comments", (table) => {
      table.increments("id").primary();
      table.integer("user_id").references('id').inTable('users');
      table.integer("post_id").references('id').inTable('posts');
      table.string("comment_body");
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("comments");
  };
