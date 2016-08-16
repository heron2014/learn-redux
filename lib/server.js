'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Public = require('./public');
const Home = require('./home');
const server = new Hapi.Server();
const plugins = [Inert, Public, Home];

server.connection({
  port: Number(process.env.PORT || 3000),
  routes: { cors: true }
});


server.register(plugins, error => {
  if (error) {
    throw error;
  }

  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('Server is running at: ', server.info.uri)
  });
});

module.exports = server;
