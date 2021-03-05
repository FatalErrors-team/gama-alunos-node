import administratorController from '../../controllers/administratorController/index.mjs';
import administratorValidator from '../../helpers/validators/administratorValidator/index.mjs';

const API_PREFIX = '/api/v1';
const ADMINISTRATOR_PATH = `${API_PREFIX}/administrador`;

export default [
  {
    method: 'GET',
    path: ADMINISTRATOR_PATH,
    handler: administratorController.getAdministrator,
  },
  {
    method: 'POST',
    path: ADMINISTRATOR_PATH,
    handler: administratorController.saveOneAdministrator,
    options: {
      validate: administratorValidator.saveAdministratorValidate,
    },
  },
];
