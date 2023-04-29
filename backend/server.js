// Importation des modules, routes et middlewares
const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');
const dbconnector = require('./middleWare/mongo.js');
const account = require('./routes/account.js');
const lists = require('./routes/lists.js');

// Tester route par défaut
fastify.get('/', (req, reply) => {
	reply.send({ hello: 'world' });
});

// Middlewares
fastify.register(cors, {
	origin: '*',
	methods: ['GET', 'POST', 'DELETE', 'PATCH'],
});

fastify.register(dbconnector);
// Routes
fastify.register(account, { prefix: '/account' });
fastify.register(lists, { prefix: '/user' });

// Run the server!
fastify.listen({ port: 0, host: '0.0.0.0' }, (err) => {
	if (err) {
		fastify.log.error(err);
		process.exit(1);
	}
});
