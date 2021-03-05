import Joi from 'joi';

export default {
  saveAdministratorValidate: {
    payload: Joi.object({
      nomeCompleto: Joi.string().min(4).required(),
      usuario: Joi.string().min(4).required(),
      senha: Joi.string().min(4).required(),
    }),
  },
};
