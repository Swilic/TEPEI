const mongoose = require('mongoose');
const fastify = require('fastify')({ logger: true })

mongoose.connect('mongodb://localhost:27017/quizz')

const quizz = mongoose.model('quizz', new mongoose.Schema({
    question : 'string',
    response : 'string',
    theme : 'string',

}))

// Declare a route
fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world' })
  })
  
  // Run the server!
  fastify.listen({ port: 3000 }, (err) => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  })