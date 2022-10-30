const auth = require('../middleWare/authentication.js');

const lists = async function (fastify) {
	fastify.register(auth);
	// const l = Object.entries(list.dict)
	const Lul = await fastify.mongo.db.collection('lists');
	await fastify.post('/lists', async (request, reply) => {
		const kekW = await Lul.find({}).toArray() // LA PUTAIN DE TA MÈRE COMMENT CA IL FAUT TO ARRAY FDPPPPPPPPPPPPPPPP C'EST ECRIT NUL PART JVAIS PETER UNE DURITE
		console.log(kekW)
	});
};

module.exports = lists;
