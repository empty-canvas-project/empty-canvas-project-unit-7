import {
    handleFetch,
    getFetchOptions,
    fetchLoggedInUser,
    setNav,
  } from "./global.js";

// Grabbing User ID for profile 
const user = await fetchLoggedInUser();
const { id } = user;
console.log(id)

const main = async () => {

  const [posts, _err] = await handleFetch(`/api/profile/${id}`, {
    method: "GET",
    credentials: "include", // IMPORTANT, this tells fetch to include cookies
    headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(body),
  });
  console.log(posts);
};
main();

export { user };