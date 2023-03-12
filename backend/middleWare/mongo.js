// Importation plugin Fastify
const fastifyPlugin = require('fastify-plugin');

// Connexion à la base de données
const dbconnector = async function (fastify) {
	fastify.register(require('@fastify/mongodb'), {
		url: 'mongodb+srv://hoho:haha@cluster0.1onw6.mongodb.net/Cluster0?retryWrites=true&w=majority',
	});
};

// Exportation du module
module.exports = fastifyPlugin(dbconnector);
