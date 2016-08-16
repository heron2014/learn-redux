exports.register = (server, options, callback) => {

  server.route({
    method: "GET",
    path: "/",
    config: {
      "cors": {
        "headers": ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language"]
      },
      description: "return the home page",
      handler: function (request, reply) {
        return reply.file("./public/index.html");
      }
    }
  });

  return callback();
};

exports.register.attributes = {
  name: "Home"
};
