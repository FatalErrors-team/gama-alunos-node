import AdministratorService from '../../services/AdministratorService.js';
import Response from '../../models/Response.js';
import { Boom } from '@hapi/boom';
import { loginHeader, loginBody } from '../../helpers/loginMethods/index.js';

export default {
  getAdministrator: async (req, h) => {
    const administratorService = new AdministratorService(
      req.server.plugins['hapi-mongoose'],
      '/administrador'
    );
    const {
      data: administrator,
      statusCode,
    } = await administratorService.find();
    const response = new Response(administrator, statusCode);
    return h.response(response).code(response.statusCode);
  },
  saveOneAdministrator: async (req, h) => {
    const administratorService = new AdministratorService(
      req.server.plugins['hapi-mongoose'],
      '/cadastro'
    );
    const { data: administrator, statusCode } = await administratorService.save(
      req.payload
    );
    const response = new Response(administrator, statusCode);
    return h.response(response).code(response.statusCode);
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
          req.server.plugins['hapi-mongoose'].Administrator
        );
        const response = new Response(token);
        return h
          .response(response)
          .code(response.statusCode)
          .header('Authorization', token);
      } catch (error) {
        return new Boom(error, { statusCode: 401 });
      }
    } else {
      try {
        const token = await loginBody(
          user,
          req.server.plugins['hapi-mongoose'].Administrator
        );
        const response = new Response(token);
        return h
          .response(response)
          .code(response.statusCode)
          .header('Authorization', token);
      } catch (error) {
        return new Boom(error, { statusCode: 401 });
      }
    }
  },
};
