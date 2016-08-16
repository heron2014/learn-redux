exports.register = function (server, options, callback) {

  server.route({
    method: "GET",
    path: "/public/{params*}",
    config: {
      description: "loads public files",
      handler: {
        directory: {
          path: "public"
        }
      }
    }
  });

  return callback();
};

exports.register.attributes = {
  name: "Public"
};
