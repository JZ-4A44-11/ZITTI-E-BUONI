import fastify from 'fastify'

const server = fastify({
  logger: process.env.NODE_ENV != 'production'
})

server.get('/', async () => {
  return 'Loro non sanno di che parlo'
})

async function bootstrap() {
  try {
    const address = await server.listen(4444)
    console.log(`Server listening at ${address}`)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
bootstrap()
