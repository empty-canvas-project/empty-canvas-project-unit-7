const knex = require("../knex");

class Posts {
  constructor({ id, users_id, content, title }) {
    this.id = id;
    this.users_id = users_id;
    this.content = content;
    this.title = title;
  }

  static async list() {
    try {
      const query = `SELECT * FROM posts`;
      const { rows } = await knex.raw(query);
      return rows.map((posts) => new Posts(posts));
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async find(id) {
    try {
      const query = "SELECT * FROM posts WHERE id = ?";
      const {
        rows: [posts],
      } = await knex.raw(query, [id]);
      return posts ? new Posts(posts) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async create(content, title) {
    try {
      const query = `INSERT INTO posts (content, title)
        VALUES (?, ?) RETURNING *`;
      const {
        rows: [posts],
      } = await knex.raw(query, [content, title]);
      return new Posts(posts);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async delete(id) {
    try {
      const result = await knex.raw(
        `
      DELETE FROM posts
      WHERE id = (?)
      RETURNING *
      `,
        [id]
      );
      return result.rows[0];
    } catch {
      return null;
    }
  }

  static async deleteAll() {
    try {
      await knex.raw("TRUNCATE posts");
      return true;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = Posts;
