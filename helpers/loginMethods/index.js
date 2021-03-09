import jwt from 'jsonwebtoken';
import { comparePasswordHash } from '../bcrypt/index.js';

const TOKEN_PREFIX = 'Bearer';

export const verifyUser = async ({ username, password }, model) => {
  return new Promise(async (resolve, reject) => {
    const user = await model.findOne({ usuario: username });
    if (!user) reject('password or user invalid');
    if (await comparePasswordHash(password, user.senha))
      reject('password or user invalid');
    resolve();
  });
};

/**
 * Realiza login por meio do token enviado pelo header
 * @param {string} authorization Basic token com os dados de usuário e senha
 * @returns Retorna um token jwt ou uma mensagem de erro.
 */
export const loginHeader = async (authorization, model) => {
  return new Promise((resolve, reject) => {
    const [scheme, hash] = authorization.split(' ');
    if (scheme !== 'Basic') {
      reject('Invalid authorization token.');
    }
    const credenciais = Buffer.from(hash, 'base64').toString();
    const [username, password] = credenciais.split(':');

    if (!username || !password) {
      reject('Invalid authorization token.');
    }

    verifyUser({ username, password }, model)
      .then(() => {
        const token = jwt.sign(
          { sub: username.toString() },
          process.env.API_KEY
        );
        resolve(`${TOKEN_PREFIX} ${token}`);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/**
 * Realiza login por meio dos dados enviados no body
 * @param {Object} user body com os dados de usuário e senha
 * @returns Retorna um token jwt ou uma mensagem de erro.
 */
export const loginBody = async (user, model) => {
  return new Promise((resolve, reject) => {
    verifyUser({ username, password }, model)
      .then(() => {
        const token = jwt.sign(
          { sub: username.toString() },
          process.env.API_KEY
        );
        resolve(`${TOKEN_PREFIX} ${token}`);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
