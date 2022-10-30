const { ObjectId } = require('@fastify/mongodb');
const fastifyPlugin = require('fastify-plugin');
const jwt = require('jsonwebtoken');

const auth = function (fastify, option, done) {
	fastify.decorateRequest('user', '');
	fastify.addHook('preHandler', (request, reply, done) => {
		jwt.verify(
			request.body.auth,
			"Vgfbsè§('98è§à!ç§è(JHGFC6U8VTcf§'(c))),tuµù$$µybbfoUR(98VGvesdfv76fyg!§vreè",
			async (err, decoded) => {
				if (err) console.err(err);

				const work = new ObjectId(decoded.user);
				request.user = work;
			}
		);
		done();
	});
	done();
};

module.exports = fastifyPlugin(auth);
