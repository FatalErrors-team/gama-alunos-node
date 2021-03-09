import hapiMongoose from 'hapi-mongoose';
import Aluno from '../../models/Aluno.js';
import Administrador from '../../models/Administrador.js';

export default async (server) => {
  await server.register({
    plugin: hapiMongoose,
    options: {
      promises: 'native',
      uri: process.env.DATA_BASE_URL,
    },
  });
  const db = server.plugins['hapi-mongoose'].connection;
  const mongoose = server.plugins['hapi-mongoose'].lib;
  server.plugins['hapi-mongoose'].Student = Aluno(db, mongoose);
  server.plugins['hapi-mongoose'].Administrator = Administrador(db, mongoose);
};
