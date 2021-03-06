import administratorController from '../../controllers/administratorController/index.mjs';
import administratorValidator from '../../helpers/validators/administratorValidator/index.mjs';

export default [
  {
    method: 'GET',
    path: '/administrador',
    handler: administratorController.getAdministrator,
    options: {
      tags: ['api', 'administrador'],
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/cadastro',
    handler: administratorController.saveOneAdministrator,
    options: {
      validate: administratorValidator.saveAdministratorValidate,
      tags: ['api', 'administrador'],
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: administratorController.login,
    options: {
      validate: administratorValidator.loginValidate,
      tags: ['api', 'administrador'],
      auth: false,
    },
  },
];
