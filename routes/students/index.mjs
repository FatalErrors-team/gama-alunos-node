import Joi from 'joi';
import studentsController from '../../controllers/studentsController/index.mjs';
import studentsValidator from '../../helpers/validators/studentsValidator/index.mjs';

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
    options: {
      validate: studentsValidator.saveStudentValidate,
    },
  },
  {
    method: 'PATCH',
    path: `${STUDENT_PATH}/{id}`,
    handler: studentsController.updateOneStudent,
    options: {
      validate: studentsValidator.updateStudentValidate,
    },
  },
  {
    method: 'DELETE',
    path: `${STUDENT_PATH}/{id}`,
    handler: studentsController.deleteOneStudent,
  },
];
