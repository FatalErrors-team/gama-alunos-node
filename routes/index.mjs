import administratorRoutes from './administrador/index.mjs';
import { apiRoutes } from './api.mjs';

export default [
  // API routes
  ...apiRoutes,

  ...administratorRoutes,
];
