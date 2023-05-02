/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, username: 'Mathew', password_hash: 'test'},
    {id: 2, username: 'Magdalena', password_hash: 'test'},
    {id: 3, username: 'Zohaib', password_hash: 'test'}
  ]);
};
