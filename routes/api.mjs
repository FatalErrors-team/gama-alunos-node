import studentsRoutes from './students/index.mjs';
import administratorRoutes from './administrador/index.mjs';

export const apiRoutes = [...studentsRoutes, ...administratorRoutes];
