import Joi from 'joi';

export default {
  saveAdministratorValidate: {
    payload: Joi.object({
      nomeCompleto: Joi.string().min(4).required(),
      usuario: Joi.string().min(4).required(),
      senha: Joi.string().min(4).required(),
    }).label('Administrador'),
  },
  loginValidate: {
    payload: Joi.object({
      usuario: Joi.string().min(4),
      senha: Joi.string().min(4),
    })
      .optional()
      .allow(null),
    headers: Joi.object({
      authorization: Joi.string(),
    })
      .optional()
      .allow(null),
    options: {
      allowUnknown: true,
    },
  },
};
