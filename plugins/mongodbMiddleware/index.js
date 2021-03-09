import hapiMongoose from 'hapi-mongoose';
import Aluno from '../../Models/Aluno.js';
import Administrador from '../../Models/Administrador.js';

const options = {
  promises: 'native',
  uri: process.env.DATA_BASE_URL,
};

export default async (server) => {
  await server.register({
    plugin: hapiMongoose,
    options: options,
  });
  const db = server.plugins['hapi-mongoose'].connection;
  const mongoose = server.plugins['hapi-mongoose'].lib;
  server.plugins['hapi-mongoose'].Aluno = Aluno(db, mongoose);
  server.plugins['hapi-mongoose'].Administrador = Administrador(db, mongoose);
};
