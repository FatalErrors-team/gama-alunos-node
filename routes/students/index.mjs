import studentsController from '../../controllers/studentsController/index.mjs';

const API_PREFIX = '/api/v1';
const STUDENT_PATH = `${API_PREFIX}/alunos`;

export default [
  {
    method: 'GET',
    path: STUDENT_PATH,
    handler: studentsController.getStudents,
  },
  {
    method: 'GET',
    path: `${STUDENT_PATH}/{id}`,
    handler: studentsController.getSingleStudent,
  },
  {
    method: 'POST',
    path: STUDENT_PATH,
    handler: studentsController.saveOneStudent,
  },
  {
    method: 'PATCH',
    path: `${STUDENT_PATH}/{id}`,
    handler: studentsController.updateOneStudent,
  },
  {
    method: 'DELETE',
    path: `${STUDENT_PATH}/{id}`,
    handler: studentsController.deleteOneStudent,
  },
];
