const fastify = require('fastify')({ logger: true });
const multipart = require('@fastify/multipart');
const cors = require('@fastify/cors');
const dbconnector = require('./middleWare/mongo.js');
const routes = require('./routes/account.js');

fastify.register(cors, {
	origin: false,
});
fastify.register(multipart);

fastify.register(dbconnector);
fastify.register(routes);

// Run the server!
fastify.listen({ port: 2999 }, (err) => {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});
