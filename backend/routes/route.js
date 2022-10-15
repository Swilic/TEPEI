const routes = async function (fastify, option) {
	const quizzs = fastify.mongo.db.collection('quizzs');

	fastify.get('/sign/:name/:mdp', async (request, reply) => {
		console.log(request.params);
		reply.header('Access-Control-Allow-Origin', '*');
		reply.send({ hello: 'Hi!' });
	});
};

module.exports = routes;
