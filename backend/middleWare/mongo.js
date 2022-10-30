const fastifyPlugin = require('fastify-plugin');

const dbconnector = async function (fastify) {
	fastify.register(require('@fastify/mongodb'), {
		url: 'mongodb://localhost:27017/quizz',
	});
};

module.exports = fastifyPlugin(dbconnector);
