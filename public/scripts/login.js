const handleSubmit = async (event) => {
  event.preventDefault();
  signupAndLoginHandler('/api/users/login', event.target);
};

const main = () => {
  if (isUserLoggedIn()) return window.location.assign('/user.html');
  setNav();

  document.querySelector('#create-form')
    .addEventListener('submit', handleSubmit);
};

main();
