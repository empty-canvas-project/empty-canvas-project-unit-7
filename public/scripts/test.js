import {
  handleFetch,
  getFetchOptions,
  fetchLoggedInUser,
  setNav,
} from "./global.js";
const url =
  "https://deezerdevs-deezer.p.rapidapi.com/search?q=Baba Pass the mayo";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ce00b6d8bcmshf06e2c73f313135p1a6f4bjsndff080f47c4a",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

let feed = document.querySelector("#feed");

console.log("hello");
const main = async () => {
  let response = await fetch(url, options);
  let data = await response.json();
  console.log(data);

  const [posts, _err] = await handleFetch("/api/posts", {
    method: "GET",
  });
  console.log(posts);

  for (let i = 0; i < posts.length; i++) {
    const item = posts[i];
    const element = document.createElement("div");
    element.innerHTML = `
    <h2>${item.username} is listening too</h2>
    <img src="${item.cover}" alt="image">
    <p>${item.title}</p>
    <p>By: ${item.artist}</p>
    <p>${item.content}</p>`;
    feed.appendChild(element);
  }
  const user = await fetchLoggedInUser();
  setNav(!!user);
};

main();
