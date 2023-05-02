const knex = require("../knex");

class Posts {
  constructor({ id, user_id, content, title }) {
    this.id = id;
    this.users_id = user_id;
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

  static async create(postData) {
    try {
      const { content, userId, title } = postData;
      const query = `
      INSERT INTO posts (content, title, user_id)
      VALUES (?, ?, ?) 
      RETURNING *`;
      const dbRes = await knex.raw(query, [content, title, userId]);
      return dbRes.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async update(content, id) {
    // dynamic queries are easier if you add more properties
    try {
      const query = `
        UPDATE posts
        SET content = ?
        WHERE id = ?
        returning *
        `;
      const updatedPost = await knex.raw(query, [content, id]);
      return updatedPost ? new Posts(updatedPost) : null;
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
