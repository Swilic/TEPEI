const fastifyPlugin = require('fastify-plugin');

const dbconnector = async function (fastify) {
	fastify.register(require('@fastify/mongodb'), {
		url: 'mongodb+srv://hoho:haha@cluster0.1onw6.mongodb.net/Cluster0?retryWrites=true&w=majority',
	});
};

module.exports = fastifyPlugin(dbconnector);
