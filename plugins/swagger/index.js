import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import HapiSwagger from 'hapi-swagger';
import SwaggerConfig from './config.js';

export default async (server) => {
  const swaggerOptions = {
    ...SwaggerConfig,
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);
};
