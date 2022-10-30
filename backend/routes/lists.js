const auth = require('../middleWare/authentication.js');

const lists = async function (fastify) {
	fastify.register(auth);
	await fastify.post('/lists', async (request, reply) => {
		console.log("I'm in the lists yes!");
		console.log(request.user);
	});
};

module.exports = lists;
