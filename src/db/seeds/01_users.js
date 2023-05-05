/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, username: 'Mathew', password: 'test'},
    {id: 2, username: 'Magdalena', password: 'test'},
    {id: 3, username: 'Zohaib', password: 'test'}
  ]);
};
