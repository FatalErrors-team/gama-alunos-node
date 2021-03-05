import Joi from 'joi';

export default {
  saveStudentValidate: {
    payload: Joi.object({
      nome: Joi.string().min(3).required(),
      email: Joi.string()
        .regex(/\S+@\S+\.\S+/)
        .required(),
      nota01: Joi.number().min(0).max(10).required(),
      nota02: Joi.number().min(0).max(10).required(),
      notaApresentacao: Joi.number().min(0).max(10).required(),
      notaTrabalho: Joi.number().min(0).max(10).required(),
      telefone: Joi.string().required(),
      curso: Joi.object({
        nome: Joi.string().required(),
      }).required(),
      endereco: Joi.object({
        cep: Joi.string().required(),
        logradouro: Joi.string().required(),
        numero: Joi.number().min(1).required(),
      }).required(),
    }),
  },
  updateStudentValidate: {
    payload: Joi.object({
      nome: Joi.string().min(3),
      email: Joi.string().regex(/\S+@\S+\.\S+/),
      nota01: Joi.number().min(0).max(10),
      nota02: Joi.number().min(0).max(10),
      notaApresentacao: Joi.number().min(0).max(10),
      notaTrabalho: Joi.number().min(0).max(10),
      telefone: Joi.string(),
      curso: Joi.object({
        nome: Joi.string(),
      }),
      endereco: Joi.object({
        cep: Joi.string(),
        logradouro: Joi.string(),
        numero: Joi.number().min(1),
      }),
    }),
  },
};
