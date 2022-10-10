const fastifyPlugin = require('fastify-plugin');

const dbconnector = async function(fastify, option){
    
    fastify.register(require('@fastify/mongodb'), {
        url: 'mongodb://localhost:27017/quizz'
    })
}

module.exports = fastifyPlugin(dbconnector);