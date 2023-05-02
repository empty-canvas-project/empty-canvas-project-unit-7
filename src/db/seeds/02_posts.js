/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    {id: 1, user_id: 1, content: 'Testing', title: 'Olivia Rodrigo'},
    {id: 2, user_id: 2, content: 'Wow!', title: 'Clairo'},
    {id: 3, user_id: 3, content: 'Fav Atm!', title: 'Drake'}
  ]);
};
