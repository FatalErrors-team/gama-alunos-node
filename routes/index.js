import administratorRoutes from './administrador/index.js';
import { apiRoutes } from './api.js';

export default [
  // API routes
  ...apiRoutes,

  ...administratorRoutes,
];
