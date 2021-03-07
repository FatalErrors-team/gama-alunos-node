import administratorController from '../../controllers/administratorController/index.mjs';
import administratorValidator, {
  validAdministrator,
  validJwt,
} from '../../helpers/validators/administratorValidator/index.mjs';

export default [
  {
    method: 'GET',
    path: '/administrador',
    handler: administratorController.getAdministrator,
    options: {
      tags: ['api', 'Administrador'],
      auth: 'jwt',
      description: 'Obter dados do administrador logado',
      plugins: {
        'hapi-swagger': {
          responses: {
            401: {
              description: 'Recurso não autorizado.',
            },
            200: {
              description: 'Retorna os dados do administrador.',
              schema: validAdministrator,
            },
          },
        },
      },
    },
  },
  {
    method: 'POST',
    path: '/cadastro',
    handler: administratorController.saveOneAdministrator,
    options: {
      validate: administratorValidator.saveAdministratorValidate,
      tags: ['api', 'Administrador'],
      description: 'Cadastrar uma nova conta',
      plugins: {
        'hapi-swagger': {
          responses: {
            400: {
              description: 'Os dados foram enviados no formato errado.',
            },
            201: {
              description: 'Cadastrado!',
            },
          },
        },
      },
    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: administratorController.login,
    options: {
      validate: administratorValidator.loginValidate,
      tags: ['api', 'Administrador'],
      description: 'Realizar login',
      plugins: {
        'hapi-swagger': {
          responses: {
            400: {
              description: 'Os dados foram enviados no formato errado.',
            },
            200: {
              description: 'Retorna o jwt de autenticação',
              schema: validJwt,
            },
          },
        },
      },
    },
  },
];
