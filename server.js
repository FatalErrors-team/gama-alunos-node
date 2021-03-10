import Hapi from '@hapi/hapi';
import swagger from './plugins/swagger/index.js';
import authorizationMiddleware from './plugins/authorizationMiddleware/index.js';
import logger from './plugins/logger/index.js';
import mongoose from './plugins/mongodbMiddleware/index.js';
import routes from './routes/index.js';
import dotenv from 'dotenv';

(async () => {
  const server = Hapi.server({
    port: process.env.PORT || 1234,
    host: process.env.PORT ? '0.0.0.0' : 'localhost',
    routes: {
      cors: {
        origin: ['*'],
        additionalHeaders: [
          'cache-control',
          'x-persistence-type',
          'authorization',
        ],
      },
    },
  });

  // .env
  dotenv.config();

  // Plugins
  await swagger(server);
  await authorizationMiddleware(server);
  await logger(server);
  await mongoose(server);

  routes.forEach((route) => server.route(route));

  server.route({
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return h.redirect('/documentation');
    },
  });

  await server.start();
})();
