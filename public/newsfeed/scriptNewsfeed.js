// const axios = require('axios');
const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f8cd80ea91msh402cc4346626cf4p17407ejsn91636161557c",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
// document.addEventListener("DOMContentLoaded", async ()=>{
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// })

const navButton = document.querySelector(".nav-button");
const card = document.querySelector(".Postcontent");
// const title = document.querySelector('#title');

navButton.addEventListener("click", async () => {
  console.log("clicking");
  card.style.visibility = "visible";
  // title.style.margin = "0.7em";
});

const searchButton = document.querySelector("#form-submit");
const searchInput = document.querySelector("#search-input");
const resultsContainer = document.querySelector("#results-container");
// const resultsDiv = document.querySelector(".Postcontent");

searchButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchTerm}`;
  console.log(url);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f8cd80ea91msh402cc4346626cf4p17407ejsn91636161557c",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  const data = await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
  debugger;
  resultsContainer.innerHTML = ""; // clear the results div
  const arrOfSongs = data.data;
  console.log(arrOfSongs);
  data.data.forEach((song) => {
    const songTitle = song.title;
    const songArtist = song.artist.name;
    const songPreview = song.preview;
    const songImgUrl = song.album.cover_medium;

    const songDiv = document.createElement("div");
    songDiv.classList.add("song");
    songDiv.innerHTML = `
        <h3>${songTitle} - ${songArtist}</h3>
        <img src="${songImgUrl}" alt="${songTitle} album cover">
        <audio controls src="${songPreview}"></audio>
      `;
    resultsContainer.appendChild(songDiv);
  });
});
