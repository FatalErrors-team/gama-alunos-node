import Hapi from '@hapi/hapi';


(async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello, World! Começando o projetinho tranquilão.';
    }
  })

  await server.start();
  console.log('[SERVER] Servidor iniciado com sucesso.');

})();