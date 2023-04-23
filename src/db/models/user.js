const knex = require('./knex');
const { hashPassword } = require('../../utils/auth-utils');

class User {
  static table = 'users';

  constructor({ id, username, password_hash }) {
    this.id = id;
    this.username = username;
    this.passwordHash = password_hash;
  }

  static async list() {
    const query = 'SELECT * FROM users';

    const { rows } = await knex.raw(query);
    return rows.map((user) => new User(user));
  }

  static async find(id) {
    const query = 'SELECT * FROM users WHERE id = ?';

    const { rows: [user] } = await knex.raw(query, [id]);
    return user ? new User(user) : null;
  }

  static async create(username, password) {
    const passwordHash = await hashPassword(password);

    const query = 'INSERT INTO users (username, password_hash) VALUES (?, ?) RETURNING *';
    const { rows } = await knex.raw(query, [username, passwordHash]);

    return rows.map((user) => new User(user));
  }

  static async deleteAll() {
    return knex.raw('TRUNCATE users;');
  }
}

module.exports = User;
