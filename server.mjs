import Hapi from '@hapi/hapi';
import routes from './routes/index.mjs';

(async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  routes.forEach((route) => server.route(route));

  server.route({
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return h.response('Not found').code(404);
    },
  });

  await server.start();
  console.log('[SERVER] Servidor iniciado com sucesso.');
})();
