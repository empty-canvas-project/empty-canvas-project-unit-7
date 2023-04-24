const saveUserToLocalStorage = (user) => {
  try {
    console.log('hi:', );
    return localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    return null;
  }
};

const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem('user'));

const deleteUser = () => localStorage.removeItem('user');

const isUserLoggedIn = () => !!getUserFromLocalStorage();

const isCurrentlyLoggedInUser = (userId) => {
  const userFromLocalStorage = getUserFromLocalStorage();
  return userFromLocalStorage && userFromLocalStorage.id === userId;
};

const fetchHandler = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) return null;
  return (response.status === 204) || response.json();
};

const getPostOptions = (body) => ({
  method: 'POST',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

const signupAndLoginHandler = async (url, form) => {
  const formData = new FormData(form);
  const options = getPostOptions(Object.fromEntries(formData.entries()));
  const response = await fetchHandler(url, options);
  if (!response) {
    form.reset();
    return alert('Something went wrong');
  }
  saveUserToLocalStorage(response);
  window.location.assign('/user.html');
};

const setNav = () => {
  const loggedOutNavHtml = `<ul>
    <li><a href="/">Home</a></li>
    <li><a href="./create.html">Sign Up</a></li>
    <li><a href="./login.html">Login</a></li>
  </ul>`;

  const loggedInNavHtml = `<ul>
    <li><a href="/">Home</a></li>
    <li><a href="./user.html">Profile</a></li>
  </ul>`;

  const navHtml = isUserLoggedIn() ? loggedInNavHtml : loggedOutNavHtml;
  document.querySelector('nav').innerHTML = navHtml;
};
