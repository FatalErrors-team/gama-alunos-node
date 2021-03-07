import studentsController from '../../controllers/studentsController/index.mjs';
import studentsValidator, {
  validStudent,
  validId,
} from '../../helpers/validators/studentsValidator/index.mjs';

const API_PREFIX = '/api/v1';
const STUDENT_PATH = `${API_PREFIX}/alunos`;

export default [
  {
    method: 'GET',
    path: STUDENT_PATH,
    handler: studentsController.getStudents,
    options: {
      tags: ['api', 'Alunos'],
      auth: 'jwt',
      description: 'Obter todos os alunos cadastrados',
      plugins: {
        'hapi-swagger': {
          responses: {
            401: {
              description: 'Recurso não autorizado.',
            },
            200: {
              description: 'Retorna todos alunos cadastrados.',
              schema: studentsValidator.returnArrayStudents,
            },
          },
          security: [{ jwt: [] }],
        },
      },
    },
  },
  {
    method: 'GET',
    path: `${STUDENT_PATH}/{id}`,
    handler: studentsController.getSingleStudent,
    options: {
      tags: ['api', 'Alunos'],
      auth: 'jwt',
      description: 'Obter um aluno específico',
      validate: {
        params: validId,
      },
      plugins: {
        'hapi-swagger': {
          responses: {
            401: {
              description: 'Recurso não autorizado.',
            },
            404: {
              description: 'Aluno não encontrado.',
            },
            200: {
              description: 'Retorna o aluno cadastrado.',
              schema: validStudent,
            },
          },
          security: [{ jwt: [] }],
        },
      },
    },
  },
  {
    method: 'POST',
    path: STUDENT_PATH,
    handler: studentsController.saveOneStudent,
    options: {
      validate: studentsValidator.saveStudentValidate,
      tags: ['api', 'Alunos'],
      auth: 'jwt',
      description: 'Salvar um aluno no sistema',
      plugins: {
        'hapi-swagger': {
          responses: {
            401: {
              description: 'Recurso não autorizado.',
            },
            201: {
              description: 'Aluno registrado com sucesso.',
            },
          },
          security: [{ jwt: [] }],
        },
      },
    },
  },
  {
    method: 'PATCH',
    path: `${STUDENT_PATH}/{id}`,
    handler: studentsController.updateOneStudent,
    options: {
      validate: studentsValidator.updateStudentValidate,
      tags: ['api', 'Alunos'],
      auth: 'jwt',
      description: 'Atualizar um aluno do sistema',
      plugins: {
        'hapi-swagger': {
          responses: {
            401: {
              description: 'Recurso não autorizado.',
            },
            204: {
              description: 'Aluno atualizado com sucesso.',
            },
          },
          security: [{ jwt: [] }],
        },
      },
    },
  },
  {
    method: 'DELETE',
    path: `${STUDENT_PATH}/{id}`,
    handler: studentsController.deleteOneStudent,
    options: {
      description: 'Apaga um aluno do sistema',
      validate: {
        params: validId,
      },
      tags: ['api', 'Alunos'],
      auth: 'jwt',
      plugins: {
        'hapi-swagger': {
          responses: {
            401: {
              description: 'Recurso não autorizado.',
            },
            204: {
              description: 'Aluno apagado com sucesso.',
            },
          },
          security: [{ jwt: [] }],
        },
      },
    },
  },
];
