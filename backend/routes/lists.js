// Importation du middleware d'authentification du token
const authentication = require('../middleWare/authentication.js');

// Déclaration des routes de gestion des listes
const lists = async function (fastify) {
	// Activer le middleware
	fastify.register(authentication);

	// Connexion à la collection de la bdd
	const Lists = await fastify.mongo.db.collection('lists');

	// Route toutes les listes
	await fastify.get('/lists', async (request, reply) => {
		// Trouve les listes de l'user sous forme de JSON
		const lists = await Lists.find({ owner: request.user }).toArray();

		// Filtre la liste des clés non utile
		const listFiltered = lists.map((element) => {
			const { questions, title } = element;
			return {
				title,
				questions,
			};
		});
		reply.send(listFiltered);
	});

	// Route création de liste
	await fastify.post('/list', (request, reply) => {
		Lists.insertOne({
			owner: request.user,
			title: request.body.title,
			questions: request.body.questions,
		});
		reply.send('Should be done kekW');
	});

	// Route pour supprimer la liste
	await fastify.delete('/list', (request, reply) => {
		Lists.deleteOne({
			title: request.body.title,
		});
		reply.send('What does the fox says');
	});

	// Route pour modifier un élément de la liste
	await fastify.patch('/list', async (request, reply) => {
		// Trouve la liste en question
		const list = await Lists.findOne({ title: request.body.title });
		// Modifie l'objet en liste

		const questions = Object.entries(list.questions);
		// Coupe à l'index et supprime 1 élément
		questions.splice(request.body.index, 1);
		// Remet la liste modifiée dans la bdd
		await Lists.updateOne(
			{ title: request.body.title },
			{ $set: { questions: Object.fromEntries(questions) } },
		);

		reply.send('It is update my friend!');
	});
};

module.exports = lists;
