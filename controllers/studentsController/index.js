import Response from '../../models/Response.js';
import StudentService from '../../services/StudentService.js';

export default {
  getStudents: async (req, h) => {
    const studentService = new StudentService(
      req.server.plugins['hapi-mongoose'],
      '/alunos'
    );
    const { data: students, statusCode } = await studentService.find();
    const response = new Response(students, statusCode);
    return h.response(response).code(response.statusCode);
  },

  getSingleStudent: async (req, h) => {
    const studentService = new StudentService(
      req.server.plugins['hapi-mongoose'],
      '/alunos'
    );
    const { data: student, statusCode } = await studentService.findOne(
      req.params.id
    );
    const response = new Response(student, statusCode);
    return h.response(response).code(response.statusCode);
  },

  saveOneStudent: async (req, h) => {
    const studentService = new StudentService(
      req.server.plugins['hapi-mongoose'],
      '/alunos'
    );
    const { data: student, statusCode } = await studentService.save(
      req.payload
    );
    const response = new Response(student, statusCode);
    return h.response(response).code(response.statusCode);
  },

  updateOneStudent: async (req, h) => {
    const studentService = new StudentService(
      req.server.plugins['hapi-mongoose'],
      '/alunos'
    );
    const { data: student, statusCode } = await studentService.updateOne(
      req.params.id,
      req.payload
    );
    const response = new Response(student, statusCode);
    return h.response(response).code(response.statusCode);
  },

  deleteOneStudent: async (req, h) => {
    const studentService = new StudentService(
      req.server.plugins['hapi-mongoose'],
      '/alunos'
    );
    const { data: student, statusCode } = await studentService.deleteOne(
      req.params.id
    );
    const response = new Response(student, statusCode);
    return h.response(response).code(response.statusCode);
  },
};
