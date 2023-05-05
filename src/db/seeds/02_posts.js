/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("posts").del();
  await knex("posts").insert([
    {
      id: 1,
      user_id: 1,
      content: "Testing",
      artist: "Eslabon Armado",
      title: "Ella Baila Sola",
      cover:
        "https://e-cdns-images.dzcdn.net/images/cover/7e9c5a183da1d4c1dfbd1e3493bae8fe/250x250-000000-80-0-0.jpg",
      preview: "",
    },
    {
      id: 2,
      user_id: 2,
      content: "I love this!",
      artist: "Grupo Frontera",
      title: "Un x100to",
      cover:
        "https://e-cdns-images.dzcdn.net/images/cover/8d2a9be13d164862ccb9a10ade01b0cf/250x250-000000-80-0-0.jpg",
      preview: "",
    },
    {
      id: 3,
      user_id: 3,
      content: "Not my favorite",
      artist: "Drake",
      title: "Search and Rescue",
      cover:
        "https://e-cdns-images.dzcdn.net/images/cover/2cc44494b7f49f43a3b5dd83d38e37b4/250x250-000000-80-0-0.jpg",
      preview: "",
    },
  ]);
};
