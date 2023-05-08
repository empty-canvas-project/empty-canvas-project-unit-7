import {
  handleFetch,
  getFetchOptions,
  fetchLoggedInUser,
  setNav,
} from "./global.js";

// Grabbing User ID for profile
const user = await fetchLoggedInUser();
const { id } = user;
console.log(id);

const main = async () => {
  const [posts, _err] = await handleFetch(`/api/profile/${id}`, {
    method: "GET",
    credentials: "include", // IMPORTANT, this tells fetch to include cookies
    headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(body),
  });
  console.log(posts);
  const yourPost = document.querySelector("#your-posts");

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
    yourPost.appendChild(element);
  }
};
main();

export { user };
