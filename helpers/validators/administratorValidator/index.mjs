import Joi from 'joi';

export const validAdministrator = Joi.object({
  nomeCompleto: Joi.string()
    .min(4)
    .example('Fulano Fulanes')
    .description('Nome do administrador'),
  usuario: Joi.string()
    .min(4)
    .example('ffulaninho')
    .description('Nome de usuário do administrador'),
  senha: Joi.string()
    .min(4)
    .example('fulaninhobonito06')
    .description('Senha do administrador'),
}).label('Administrador');

export const validJwt = Joi.object({
  token: Joi.string()
    .example(
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRmF0YWxFcnJvcnMifQ.gSwvQ1wgNUEDfPja2zHqD2WcytGoRpzZGdA_RmiKWIg'
    )
    .description('JWT de autenticação'),
});

export default {
  saveAdministratorValidate: {
    payload: Joi.object({
      nomeCompleto: Joi.string()
        .min(4)
        .required()
        .example('Fulano Fulanes')
        .description('Nome do administrador'),
      usuario: Joi.string()
        .min(4)
        .required()
        .example('ffulaninho')
        .description('Nome de usuário do administrador'),
      senha: Joi.string()
        .min(4)
        .required()
        .example('fulaninhobonito06')
        .description('Senha do administrador'),
    }).label('Administrador'),
  },
  loginValidate: {
    payload: Joi.object({
      usuario: Joi.string()
        .min(4)
        .example('ffulaninho')
        .description('Nome do administrador'),
      senha: Joi.string()
        .min(4)
        .example('fulaninhobonito06')
        .description('Senha do administrador'),
    })
      .label('Administrador')
      .optional()
      .allow(null),
    headers: Joi.object({
      authorization: Joi.string()
        .example('Basic ZmF0YWxlcnJvcnM6dmFtb3NwYXNzYXI=')
        .description('Base64(usuario:senha)'),
    })
      .label('AdministradorLogin')
      .optional()
      .allow(null),
    options: {
      allowUnknown: true,
    },
  },
};
