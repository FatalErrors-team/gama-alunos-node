import { Boom } from '@hapi/boom';
import { generatePasswordHash } from '../../helpers/bcrypt/index.mjs';
import { loginHeader, loginBody } from '../../helpers/loginMethods/index.mjs';

export default {
  getAdministrator: async (req, h) => {
    return h.response('Your account');
  },
  saveOneAdministrator: async (req, h) => {
    req.payload.senha = await generatePasswordHash(req.payload.senha);
    return h.response(req.payload).code(201);
  },
  login: async (req, h) => {
    const { authorization } = req.headers;
    const user = req.payload ? req.payload : undefined;

    if (!authorization && !user) {
      return new Boom('You must send any login data.', { statusCode: 401 });
    }

    if (authorization) {
      try {
        const token = await loginHeader(authorization);
        return h.response({ token });
      } catch (error) {
        return new Boom(error, { statusCode: 401 });
      }
    } else {
      try {
        const token = await loginBody(user);
        return h.response({ token });
      } catch (error) {
        return new Boom(error, { statusCode: 401 });
      }
    }
  },
};
