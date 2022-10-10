const fastify = require("fastify")({ logger: true });
const dbconnector = require('./middleWare/mongo')
// const routes = require('./routes/route')

fastify.register(dbconnector)




  // Run the server!
  fastify.listen({ port: 3000 }, (err) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  })
