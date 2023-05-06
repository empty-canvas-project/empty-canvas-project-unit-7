import {
  handleFetch,
  getFetchOptions,
  fetchLoggedInUser,
  setNav,
} from "./global.js";

document.addEventListener("DOMContentLoaded", async () => {
  const user = await fetchLoggedInUser();
  console.log(user);
  const uploadContent = document
    .querySelector("#uploadContent")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      let search = event.target[0].value;
      let caption = event.target[1].value;
      console.log(caption);
      const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "5ed0c4e8d3msh51878c8ad8a0e79p1e8a19jsne0f70635c56a",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      console.log(data.data[0].preview);
      const body = {
        user_id: user.id,
        username: user.username,
        content: caption,
        artist: data.data[0].artist.name,
        title: data.data[0].title,
        cover: data.data[0].album.cover_medium,
        preview: data.data[0].preview,
      };
      const posting = await handleFetch(
        "/api/posts",
        getFetchOptions(body, "POST")
      );
    });
});
