/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {id: 1, user_id: 1, post_id: 1, comment_body: 'cool! '},
    {id: 2, user_id: 2, post_id: 2, comment_body: 'Hmmm!'},
    {id: 3, user_id: 3, post_id: 3, comment_body: 'Not bad!'}
  ]);
};
