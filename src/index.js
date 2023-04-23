const server = require('./server');

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
