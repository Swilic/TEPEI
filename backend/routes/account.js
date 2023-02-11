// importation des modules
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Déclaration des routes de connexion et d'inscription
const routes = async function (fastify) {
	//Connexion à la collection de la base de données
	const users = await fastify.mongo.db.collection('user');

	// Route de connexion
	await fastify.post('/login', async (request, reply) => {
		// Récupération des données de la requête
		const {
			body: { user, pass },
		} = request;

		// Vérification de l'existence de l'utilisateur
		const person = await users.findOne({ name: user });
		if (person === null)
			return reply.send('Mot de passe ou utilisateur incorrect');

		// Vérification du mot de passe
		const match = await bcrypt.compare(pass, person.mdp);
		// Erronée
		if (!match) return reply.send('Mot de passe ou utilisateur incorrect');

		reply.raw.setHeader('Access-Control-Allow-Origin', '*');
		// Réponse réussite
		reply.send({
			status: 'Clear',
			user: user,
			token: jwt.sign(
				{ user: person._id },
				"Vgfbsè§('98è§à!ç§è(JHGFC6U8VTcf§'(c))),tuµù$$µybbfoUR(98VGvesdfv76fyg!§vreè",
				{ expiresIn: '6h' },
			),
		});
	});

	// Route d'inscription
	await fastify.post('/sign', async (request, reply) => {
		// Récupération des données de la requête
		const {
			body: { user, pass },
		} = request;

		// Vérification de l'existence de l'utilisateur
		const alreadyIn = await users.findOne({ name: user });

		// Création de l'utilisateur
		if (alreadyIn === null) {
			// Hashage du mot de passe
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
// Exportation du module
module.exports = routes;
