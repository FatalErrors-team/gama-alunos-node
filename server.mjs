import Hapi from '@hapi/hapi';
import swagger from './swagger/index.mjs';
import routes from './routes/index.mjs';

(async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  // Plugins
  await swagger(server);

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
