import Joi from 'joi';

export const validStudent = Joi.object({
  nome: Joi.string().min(3).example('Fulano').description('Nome do aluno'),
  email: Joi.string()
    .regex(/\S+@\S+\.\S+/)
    .example('fulano@email.com')
    .description('Email do aluno'),
  nota01: Joi.number()
    .min(0)
    .max(10)
    .example(10)
    .description('Primeira nota do aluno'),
  nota02: Joi.number()
    .min(0)
    .max(10)
    .example(10)
    .description('Segunda nota do aluno'),
  notaApresentacao: Joi.number()
    .min(0)
    .max(10)
    .example(10)
    .description('Nota da apresentação do aluno'),
  notaTrabalho: Joi.number()
    .min(0)
    .max(10)
    .example(10)
    .description('Nota do trabalho do aluno'),
  media: Joi.number()
    .min(0)
    .max(10)
    .example(10)
    .description('Média das nota do aluno'),
  conceito: Joi.string()
    .example('Aprovado')
    .description('Conceito com base na média'),
  telefone: Joi.string().example('770707070').description('Número do aluno'),
  curso: Joi.object({
    nome: Joi.string()
      .example('Engenharia da Computação')
      .description('Nome do curso'),
  })
    .description('Curso do aluno')
    .label('Curso'),
  endereco: Joi.object({
    cep: Joi.string().example('70707-070').description('CEP'),
    logradouro: Joi.string()
      .example('Rua da rua da rua')
      .description('Logradouro'),
    numero: Joi.number().min(1).example(457).description('Número da casa'),
  })
    .description('Endereço do aluno')
    .label('Endereço'),
}).label('Aluno');

export const validId = Joi.object({
  id: Joi.string().example('1').description('Id do aluno'),
});

export default {
  saveStudentValidate: {
    payload: Joi.object({
      nome: Joi.string()
        .min(3)
        .required()
        .example('Fulano')
        .description('Nome do aluno'),
      email: Joi.string()
        .regex(/\S+@\S+\.\S+/)
        .required()
        .example('fulano@email.com')
        .description('Email do aluno'),
      nota01: Joi.number()
        .min(0)
        .max(10)
        .required()
        .example(10)
        .description('Primeira nota do aluno'),
      nota02: Joi.number()
        .min(0)
        .max(10)
        .required()
        .example(10)
        .description('Segunda nota do aluno'),
      notaApresentacao: Joi.number()
        .min(0)
        .max(10)
        .required()
        .example(10)
        .description('Nota da apresentação do aluno'),
      notaTrabalho: Joi.number()
        .min(0)
        .max(10)
        .required()
        .example(10)
        .description('Nota do trabalho do aluno'),
      telefone: Joi.string()
        .required()
        .example('770707070')
        .description('Número do aluno'),
      curso: Joi.object({
        nome: Joi.string()
          .required()
          .example('Engenharia da Computação')
          .description('Nome do curso'),
      })
        .required()
        .description('Curso do aluno')
        .label('Curso'),
      endereco: Joi.object({
        cep: Joi.string().required().example('70707-070').description('CEP'),
        logradouro: Joi.string()
          .required()
          .example('Rua da rua da rua')
          .description('Logradouro'),
        numero: Joi.number()
          .min(1)
          .required()
          .example(457)
          .description('Número da casa'),
      })
        .required()
        .description('Endereço do aluno')
        .label('Endereço'),
    }).label('Aluno'),
  },
  updateStudentValidate: {
    payload: Joi.object({
      id: Joi.string().example(1).description('ID do aluno'),
      nome: Joi.string().min(3).example('Fulano').description('Nome do aluno'),
      email: Joi.string()
        .regex(/\S+@\S+\.\S+/)
        .example('fulano@email.com')
        .description('Email do aluno'),
      nota01: Joi.number()
        .min(0)
        .max(10)
        .example(10)
        .description('Primeira nota do aluno'),
      nota02: Joi.number()
        .min(0)
        .max(10)
        .example(10)
        .description('Segunda nota do aluno'),
      notaApresentacao: Joi.number()
        .min(0)
        .max(10)
        .example(10)
        .description('Nota da apresentação do aluno'),
      notaTrabalho: Joi.number()
        .min(0)
        .max(10)
        .example(10)
        .description('Nota do trabalho do aluno'),
      telefone: Joi.string()
        .example('770707070')
        .description('Número do aluno'),
      curso: Joi.object({
        nome: Joi.string()
          .example('Engenharia da Computação')
          .description('Nome do curso'),
      })
        .description('Curso do aluno')
        .label('Curso'),
      endereco: Joi.object({
        cep: Joi.string().required().example('70707-070').description('CEP'),
        logradouro: Joi.string()
          .example('Rua da rua da rua')
          .description('Logradouro'),
        numero: Joi.number().min(1).example(457).description('Número da casa'),
      })
        .description('Endereço do aluno')
        .label('Endereço'),
    }).label('Aluno'),
    params: validId,
  },
  returnArrayStudents: Joi.array().items(validStudent).label('Lista de Alunos'),
};
