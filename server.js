import Hapi from '@hapi/hapi';
import swagger from './plugins/swagger/index.js';
import authorizationMiddleware from './plugins/authorizationMiddleware/index.js';
import logger from './plugins/logger/index.js';
import routes from './routes/index.js';
import dotenv from 'dotenv';

(async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  // .env
  dotenv.config();

  // Plugins
  await swagger(server);
  await authorizationMiddleware(server);
  await logger(server);

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
