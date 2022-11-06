const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');
const dbconnector = require('./middleWare/mongo.js');
const routes = require('./routes/account.js');
const lists = require('./routes/lists.js');

fastify.register(cors, {
	origin: '*',
	methods: ['GET', 'POST', 'DELETE'],
});
fastify.register(dbconnector);

fastify.register(routes, { prefix: '/account' });
fastify.register(lists, { prefix: '/user' });

// Run the server!
fastify.listen({ port: 2999 }, (err) => {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});
