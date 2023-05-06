import {
  handleFetch,
  getFetchOptions,
  fetchLoggedInUser,
  setNav,
} from "./global.js";

let feed = document.querySelector("#feed");

console.log("hello");
const main = async () => {
  const [posts, _err] = await handleFetch("/api/posts", {
    method: "GET",
  });
  console.log(posts);

  for (let i = 0; i < posts.length; i++) {
    const item = posts[i];
    const element = document.createElement("div");
    element.innerHTML = `
    <div class="card">
      <div class="listeningToo">
        <h2>${item.username} is listening too</h2>
      </div>
      <div class="music">
        <img src="${item.cover}" alt="image">
        <div class="musicText">
          <p>${item.title}</p>
          <p>By: ${item.artist}</p>
        </div>
      </div>
      <div class="caption">
        <p>${item.content}</p>
      </div>
    </div>`;
    feed.appendChild(element);
  }
};

main();
