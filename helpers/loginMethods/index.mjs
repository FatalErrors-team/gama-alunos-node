import jwt from 'jsonwebtoken';

const TOKEN_PREFIX = 'Bearer';

export const loginHeader = async (authorization) => {
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

    // Login verification stay here ---

    const token = jwt.sign({ sub: username.toString() }, process.env.API_KEY);
    resolve(`${TOKEN_PREFIX} ${token}`);
  });
};

export const loginBody = async (user) => {
  return new Promise((resolve, reject) => {
    // Login verification stay here ---
    const token = jwt.sign(
      { sub: user.usuario.toString() },
      process.env.API_KEY
    );

    resolve(`${TOKEN_PREFIX} ${token}`);
  });
};
