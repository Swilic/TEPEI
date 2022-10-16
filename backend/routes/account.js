const routes = async function (fastify, option) {
	// const quizzs = fastify.mongo.db.collection('quizzs');
	
	
	await fastify.post('/sign', (request, reply) => {
		console.log('hey');

		reply.send({ hello: 'Hi!' });
	});
};

module.exports = routes;
