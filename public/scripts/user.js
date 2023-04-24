const handleLogout = async (event) => {
  event.preventDefault();
  const options = { method: 'DELETE' };
  const response = await fetchHandler('/api/users/logout', options);
  if (!response) return alert('Something went wrong');
  deleteUser();
  window.location.assign('/');
};

const main = () => {
  const user = getUserFromLocalStorage();
  if (!user) return window.location.assign('/');
  setNav();

  document.querySelector('#username').textContent = user.username;

  document.querySelector('#logout-form')
    .addEventListener('submit', handleLogout);
};

main();
