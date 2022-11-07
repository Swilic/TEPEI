const auth = require('../middleWare/authentication.js');

const lists = async function (fastify) {
	fastify.register(auth);
	const Lists = await fastify.mongo.db.collection('lists');
	await fastify.get('/lists', async (request, reply) => {
		const lists = await Lists.find({ owner: request.user }).toArray();

		const listFiltered = lists.map((element) => {
			const { questions, title } = element;
			return {
				title,
				questions,
			};
		});
		reply.send(listFiltered);
	});
	await fastify.post('/list', async (request, reply) => {
		await Lists.insertOne({
			owner: request.user,
			title: request.body.title,
			questions: request.body.questions,
		});
		reply.send('Should be done kekW');
	});
	await fastify.delete('/list', async (request, reply) => {
		await Lists.deleteOne({
			title: request.body.title,
		});
		reply.send('What does the fox says');
	});
	await fastify.patch('/list', async (request, reply) => {
		const list = await Lists.findOne({title: request.body.title});
		const questions = Object.entries(list.questions);
		questions.splice(request.body.index, 1)
		await Lists.updateOne({title: request.body.title}, {$set:{questions: Object.fromEntries(questions)}})
		
		reply.send('It is update my friend!')
	})
};

module.exports = lists;
