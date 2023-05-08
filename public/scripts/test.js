import {
  handleFetch,
  getFetchOptions,
  fetchLoggedInUser,
  setNav,
} from "./global.js";

let feed = document.querySelector("#feed");

console.log("hello");
const main = async () => {
  // const myModal = document.getElementById("myModal");
  // const myInput = document.getElementById("myInput");

  // myModal.addEventListener("shown.bs.modal", () => {
  //   myInput.focus();
  // });
  const [posts, _err] = await handleFetch("/api/posts", {
    method: "GET",
  });
  console.log(posts);

  for (let i = 0; i < posts.length; i++) {
    const item = posts[i];
    console.log(item);
    const element = document.createElement("div");
    element.innerHTML = `
    <div class="card">
      <div class="listeningToo">
        <h3>${item.username} is listening too</h3>
      </div>
      <div id="apiContents">
      <div class="music">
        <img src="${item.cover}" alt="image">
        <div class="caption">
        <p>${item.content}</p>
      </div>
      </div>
        <div class="musicText">
          <p>${item.title}</p>
          <p>By: ${item.artist}</p>
          <audio controls>
            <source src=${item.preview} type="audio/mpeg">
              Your browser does not support the audio element.
          </audio>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Comment
          </button>
        </div>
      </div>
      </div>
      <div class="allComments">
        <p>comment section</p>
      </div>
    </div>


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Make a Comment</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="mb-3">
      <label for="message-text" class="col-form-label">Comment:</label>
      <textarea class="form-control" id="message-text"></textarea>
    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button id="sendComment" type="button" class="btn btn-primary">Comment</button>
      </div>
    </div>
  </div>
</div>`;
    feed.appendChild(element);
    const sendComment = document.querySelector("#sendComment");
    sendComment.addEventListener("click", (event) => {
      event.preventDefault();
      const messageText = document.querySelector("#message-text").value;
      console.log(messageText);
    });
  }
};

main();
