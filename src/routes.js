const express = require('express');
const userController = require('./controllers/user');
const postsController = require('./controllers/posts');
const commentController = require('./controllers/comment')
const addModels = require('./middleware/add-models');
const checkAuthentication = require('./middleware/check-authentication');

const Router = express.Router();
Router.use(addModels);

Router.get('/cookieCounter', (req, res) => {
  const { session } = req;
  console.log(session);
  session.viewCount = (session.viewCount || 0) + 1;
  console.log(session.viewCount);
  res.status(200).send({ count: session.viewCount });
});

// Create 
Router.post('/users', userController.create);
Router.post('/users/login', userController.login);
Router.post('/posts', postsController.create);

Router.post('/comment', commentController.create);


// Read
Router.get('/users', userController.list);
Router.get('/users/:id', userController.show);
Router.get('/me', userController.showMe);

Router.get('/posts', postsController.list);
Router.get('/posts/:id', postsController.show);

Router.get('/comment', commentController.list);
Router.get('/comment/:id', commentController.show);

// checkAuthentication middleware is applied to only to this route (and /logged-in-secret)
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

// Update
Router.patch('/users/:id', checkAuthentication, userController.update);
Router.patch('/posts/:id', postsController.update)

// Delete
Router.delete('/users/logout', userController.logout);
Router.delete('/posts/:id', postsController.destroy);
Router.delete('/posts', postsController.destroyAll);

module.exports = Router;
