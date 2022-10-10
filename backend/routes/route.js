const fastify = require('fastify');

const Routes = function(fastify, option){
    const collection = fastify.mongo.db.collection('quizzs');

    fastify.get('/', (request, reply) => {
        const stuff = collection.findOne({question : "Algérie"})
        reply.send(stuff)
    })

}