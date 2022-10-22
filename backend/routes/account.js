const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const routes = async function (fastify, option) {
	// const quizzs = fastify.mongo.db.collection('quizzs');
	const users = await fastify.mongo.db.collection('user');

	await fastify.post('/login', async (request, reply) => {
		const {
			body: { user, pass },
		} = request;

		const person = await users.findOne({ name: user });
		if (person === null) return reply.send('Mot de passe ou utilisateur incorrect');

		const { mdp } = person;
		bcrypt.compare(pass, mdp, (err, result) => {
			if (err) return console.log(err);
			if(!result) return reply.send('Mot de passe ou utilisateur incorrect');
		})
		const token = jwt.sign({ user: user },
			"Vgfbsè§('98è§à!ç§è(JHGFC6U8VTcf§'(c))),tuµù$$µybbfoUR(98VGvesdfv76fyg!§vreè",
			{ expiresIn : '24h'})

		reply.send({ 
			hello: 'Hi!',
			token : token
		});
	});

	await fastify.post('/sign', async (request, reply) => {
		const {
			body: { user, pass },
		} = request;
		const alreadyIn = await users.findOne({ name: user });

		if (alreadyIn === null) {
			bcrypt.hash(pass, 10, (err, hash) => {
				if (err) return console.err(err);

				users.insertOne({
					name: user,
					mdp: hash,
				});
			});
			return reply.send('Clear');
		}
		return reply.send('Problem');
	});
};

module.exports = routes;
