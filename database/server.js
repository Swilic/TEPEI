const mongoose = require('mongoose');
const fastify = require('fastify')({ logger: true })

mongoose.connect('mongodb://localhost:27017/quizz')

const quizz = mongoose.model('quizz', new mongoose.Schema({
    question : 'string',
    response : 'string',
    theme : 'string',

}))

quizz.create({
    question: 'Tu vas bien? ',
    response: 'Oui et toi? ',
    theme: 'Le respect'
})
console.log(quizz.find({}))

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
  
  // Run the server!
  const start = async () => {
    try {
      await fastify.listen({ port: 3000 })
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()