const knex = require("../knex");

class Comment {
  constructor({ id, user_id, post_id, comment_body }) {
    this.id = id;
    this.user_id = user_id;
    this.post_id = post_id;
    this.comment_body = comment_body;
  }

  static async list() {
    try {
      const query = `SELECT * FROM comments`;
      const { rows } = await knex.raw(query);
      return rows.map((comment) => new Comment(comment));
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async find(id) {
    try {
      const query = `SELECT * FROM comments WHERE id = ?`
      const { rows: [comment] } = await knex.raw(query, [id]);

      return comment ? new Comment(comment) : null; 
    } catch (err) {
      console.log(err)
      return null
    }
  }

  static async create(commentData){
    try {
      const { user_id, post_id, comment_body } = commentData;
      const query = `
      INSERT INTO comments (user_id, post_id, comment_body) 
      VALUES ( ?, ?, ? )
      RETURNING *`
      const dbRes = await knes.raw(query, [user_id, post_id, comment_body])
      return dbRes.rows[0];
      
    } catch(err) {
      console.log(error)
     return null;
    }
  }
}

module.exports = Comment;
