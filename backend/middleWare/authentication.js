const { ObjectId } = require('@fastify/mongodb');
const fastifyPlugin = require('fastify-plugin');
const jwt = require('jsonwebtoken');

const auth = function (fastify, option, done) {
	fastify.decorateRequest('user', '');
	fastify.addHook('preHandler', (request, reply, done) => {
		const { authorization } = request.headers;
		jwt.verify(
			authorization.split(' ')[1],
			"Vgfbsè§('98è§à!ç§è(JHGFC6U8VTcf§'(c))),tuµù$$µybbfoUR(98VGvesdfv76fyg!§vreè",
			async (err, decoded) => {
				if (err) console.error(err);

				const userObjectId = new ObjectId(decoded.user);
				request.user = userObjectId;
			}
		);
		done();
	});
	done();
};

module.exports = fastifyPlugin(auth);
