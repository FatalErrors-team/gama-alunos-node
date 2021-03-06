import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const generatePasswordHash = async (password) => {
  const generatedHash = await bcrypt.hash(password, SALT_ROUNDS);
  return generatedHash;
};

export const comparePasswordHash = async (textPassword, hashPassword) => {
  const result = await bcrypt.compare(textPassword, hashPassword);
  return result;
};
