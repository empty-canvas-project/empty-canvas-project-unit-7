const main = async () => {
  setNav();

  const secret = await fetchHandler('/api/logged-in-secret');
  if (secret) {
    console.log('secret:', secret);
    document.querySelector('#secret-message').textContent = secret.msg;
  }
};

main();
