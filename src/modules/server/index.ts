import fastify, { FastifyInstance, FastifyServerOptions } from 'fastify'

export default (config: FastifyServerOptions): FastifyInstance => {
  return fastify(config)
}
