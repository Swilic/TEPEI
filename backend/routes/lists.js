const auth = require('../middleWare/authentication.js');

const lists = async function (fastify) {
	fastify.register(auth);
	const Lists = await fastify.mongo.db.collection('lists');
	await fastify.get('/lists', async (request, reply) => {
		const lists = await Lists.find({ owner: request.user }).toArray();

		const listFiltered = lists.map((element) => {
			const { dict, Title } = element;
			return {
				dict,
				Title,
			};
		});
		reply.send(listFiltered);
	});
};

module.exports = lists;
