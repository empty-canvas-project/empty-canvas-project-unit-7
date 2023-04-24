const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const knex = require('../db/knex');

const Router = express.Router();

const sessionOpts = {
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
  resave: false,
  store: new KnexSessionStore({ knex }),
};

Router.use(cookieParser());
Router.use(session(sessionOpts));

module.exports = Router;
