import Hapi from '@hapi/hapi';
import swagger from './plugins/swagger/index.mjs';
import authorizationMiddleware from './plugins/authorizationMiddleware/index.mjs';
import routes from './routes/index.mjs';
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

  routes.forEach((route) => server.route(route));

  server.route({
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return h.redirect('/documentation');
    },
  });

  await server.start();
  console.log('[SERVER] Servidor iniciado com sucesso.');
})();
