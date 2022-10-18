const bcrypt = require('bcrypt');

const routes = async function (fastify, option) {
	// const quizzs = fastify.mongo.db.collection('quizzs');
	const users = await fastify.mongo.db.collection('user');

	await fastify.post('/login', async (request, reply) => {
		const {
			body: { user, pass },
		} = request;

		const person = await users.findOne({
			name: user,
			mdp: pass,
		});
		if (person == null) {
			reply.status(200);
			return reply.send('Mot de passe ou utilisateur incorrect');
		}

		// Envoyer le token. Mais où encore  ?
		console.log(person);
		reply.send({ hello: 'Hi!' });
	});

	await fastify.post('/sign', async (request, reply) => {
		const {
			body: { user, pass },
		} = request;
		const alreadyIn = await users.findOne({ name: user });

		if (alreadyIn === null) {
			bcrypt.hash(pass, 10, (err, hash) => {
				if (err) {
					console.err(err);
				}
				users.insertOne({
					name: user,
					mdp: hash,
				});
				console.log('hahahey');
			});
			return reply.send('true');
		}
		console.log('oh no oh no oh no');

		return reply.send('no no no ');
	});
	// user.insertOne({
	// 	name: user,
	// 	mdp: pass
	// })
};

module.exports = routes;
