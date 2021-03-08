import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

/**
 * Função para gerar o hash da senha por meio do Bcrypt
 * @param {string} password Senha a ser criptografada
 * @returns {string} Senha criptografada
 */
export const generatePasswordHash = async (password) => {
  return await bcrypt.hash(password, SALT_ROUNDS);
};

/**
 * Função para comparar hash com senha em texto por meio do Bcrypt
 * @param {string} textPassword Senha em texto normal
 * @param {string} hashPassword Senha já hasheada
 * @returns {boolean} retorna o resultado da comparação
 */
export const comparePasswordHash = async (textPassword, hashPassword) => {
  return await bcrypt.compare(textPassword, hashPassword);
};
