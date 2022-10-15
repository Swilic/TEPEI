const fastify = require("fastify")({ logger: true });
const dbconnector = require('./middleWare/mongo.js');
const routes = require('./routes/route.js');

fastify.register(dbconnector);
fastify.register(routes);

  // Run the server!
  fastify.listen({ port: 2999 }, (err) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  })
