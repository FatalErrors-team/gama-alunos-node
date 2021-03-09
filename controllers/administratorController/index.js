import RestRespository from '../../repositories/restRepository/RestRepository.js';
import { Boom } from '@hapi/boom';
import { generatePasswordHash } from '../../helpers/bcrypt/index.js';
import { loginHeader, loginBody } from '../../helpers/loginMethods/index.js';

export default {
  getAdministrator: async (req, h) => {
    if (process.env.PERSISTENCE_TYPE === 'REST') {
      try {
        const repository = new RestRespository(
          process.env.API_URL,
          '/administrador'
        );
        const administrator = await repository.list();
        return h.response(administrator.data);
      } catch (error) {
        return h.response({ message: error.message });
      }
    } else {
      const administrator = await req.server.plugins[
        'hapi-mongoose'
      ].Administrador.find();
      const response = new Response(200, administrator);
      return h.response(response).statusCode(response.statusCode);
    }
  },
  saveOneAdministrator: async (req, h) => {
    req.payload.senha = await generatePasswordHash(req.payload.senha);
    if (process.env.PERSISTENCE_TYPE === 'REST') {
      try {
        const repository = new RestRespository(
          process.env.API_URL,
          '/administrador'
        );
        const administrator = await repository.insert(req.payload);
        return h.response(administrator.data);
      } catch (error) {
        return h.response({ message: error.message });
      }
    } else {
      const administrator = new req.server.plugins[
        'hapi-mongoose'
      ].Administrador(req.payload);
      const res = administrator.save();
      const response = new Response(201, res);
      return h.response(response).statusCode(response.statusCode);
    }
  },
  login: async (req, h) => {
    const { authorization } = req.headers;
    const user = req.payload ? req.payload : undefined;

    if (!authorization && !user) {
      return new Boom('You must send any login data.', { statusCode: 401 });
    }

    if (authorization) {
      try {
        const token = await loginHeader(
          authorization,
          req.server.plugins['hapi-mongoose'].Administrador
        );
        const response = new Response(201, token);
        return h.response(response).code(response.statusCode);
      } catch (error) {
        return new Boom(error, { statusCode: 401 });
      }
    } else {
      try {
        const token = await loginBody(
          user,
          req.server.plugins['hapi-mongoose'].Administrador
        );
        const response = new Response(201, token);
        return h.response(response).code(response.statusCode);
      } catch (error) {
        return new Boom(error, { statusCode: 401 });
      }
    }
  },
};
