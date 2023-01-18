// Importation des modules
const { ObjectId } = require('@fastify/mongodb');
const fastifyPlugin = require('fastify-plugin');
const jwt = require('jsonwebtoken');

// Déclaration fonction
const auth = function (fastify, option, done) {
	// Ajout d'une propriété à la requête
	fastify.decorateRequest('user', '');
	// Vérification du token d'authentification et ajout de l'id de l'utilisateur à la requête
	fastify.addHook('preHandler', (request, reply, done) => {
		const { authorization } = request.headers;
		jwt.verify(
			authorization.split(' ')[1],
			"Vgfbsè§('98è§à!ç§è(JHGFC6U8VTcf§'(c))),tuµù$$µybbfoUR(98VGvesdfv76fyg!§vreè",
			(err, decoded) => {
				if (err || decoded == undefined) {
					console.error(err);
					reply.send('Unvalid token!');
				}
				request.user = new ObjectId(decoded.user);
			}
		);
		done();
	});
	done();
};

module.exports = fastifyPlugin(auth);
