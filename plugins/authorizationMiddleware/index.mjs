import hapiJwt from '@hapi/jwt';

export default async (server) => {
  await server.register(hapiJwt);

  server.auth.strategy('autorizacao_jwt', 'jwt', {
    keys: process.env.API_KEY,
    verify: {
      aud: false,
      iss: false,
      sub: false,
      nbf: false,
      exp: false,
      maxAgeSec: 14400, // 4 hours
      timeSkewSec: 15,
    },
    validate: (artifacts, request, h) => {
      return {
        isValid: true,
      };
    },
  });

  server.auth.default('autorizacao_jwt');
};
