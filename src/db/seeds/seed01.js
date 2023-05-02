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

  await knex('posts').del()
  await knex('posts').insert([
    {id: 1, users_id: 1, content: 'Testing', title: 'Olivia Rodrigo'},
    {id: 2, users_id: 2, content: 'Wow!', title: 'Clairo'},
    {id: 3, users_id: 3, content: 'Fav Atm!', title: 'Drake'}
  ]);

  await knex('comments').del()
  await knex('comments').insert([
    {id: 1, users_id: 1, posts_id: 1, comment_body: 'cool! '},
    {id: 2, users_id: 2, posts_id: 2, comment_body: 'Hmmm!'},
    {id: 3, users_id: 3, posts_id: 3, comment_body: 'Not bad!'}
  ]);
};
