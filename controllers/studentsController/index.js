import RestRespository from '../../repositories/restRepository/RestRepository.js';
import Response from '../../Models/Response.js';

export default {
  getStudents: async (req, h) => {
    if (process.env.PERSISTENCE_TYPE === 'REST') {
      try {
        const repository = new RestRespository(process.env.API_URL, '/alunos');
        const students = await repository.list();
        return h.response(students.data);
      } catch (error) {
        return h.response({ message: error.message });
      }
    } else {
      const students = await req.server.plugins['hapi-mongoose'].Aluno.find();
      const response = new Response(200, students);
      return h.response(response);
    }
  },
  getSingleStudent: async (req, h) => {
    if (process.env.PERSISTENCE_TYPE === 'REST') {
      try {
        const repository = new RestRespository(
          process.env.API_URL,
          '/alunos/' + req.params.id
        );
        const students = await repository.list();
        return h.response(students.data);
      } catch (error) {
        return h.response({ message: error.message });
      }
    } else {
      const student = await req.server.plugins['hapi-mongoose'].Aluno.findOne({
        _id: req.params.id,
      });
      const response = new Response(200, student);
      return h.response(response);
    }
  },
  saveOneStudent: async (req, h) => {
    if (process.env.PERSISTENCE_TYPE === 'REST') {
      try {
        const repository = new RestRespository(process.env.API_URL, '/alunos');
        const savedStudent = await repository.insert(req.payload);
        return h.response(savedStudent.data).code(savedStudent.status);
      } catch (error) {
        return h.response({ message: error.message });
      }
    } else {
      const student = new req.server.plugins['hapi-mongoose'].Aluno(
        req.payload
      );
      const savedStudent = await student.save();

      return h.response(savedStudent);
    }
  },
  updateOneStudent: async (req, h) => {
    if (process.env.PERSISTENCE_TYPE === 'REST') {
      try {
        const repository = new RestRespository(process.env.API_URL, '/alunos');
        const savedStudent = await repository.update(
          req.params.id,
          req.payload
        );
        return h.response(savedStudent.data).code(savedStudent.status);
      } catch (error) {
        return h.response({ message: error.message });
      }
    } else {
      const student = req.payload;
      const updatedStudent = await req.server.plugins[
        'hapi-mongoose'
      ].Aluno.updateOne({ _id: req.params.id }, { $set: student });
      return h.response(updatedStudent);
    }
  },

  deleteOneStudent: async (req, h) => {
    if (process.env.PERSISTENCE_TYPE === 'REST') {
      try {
        const repository = new RestRespository(process.env.API_URL, '/alunos');
        const deletedStudent = await repository.delete(req.params.id);
        return h.response(deletedStudent.data).code(deletedStudent.status);
      } catch (error) {
        return h.response({ message: error.message });
      }
    } else {
      const deletedStudent = await req.server.plugins[
        'hapi-mongoose'
      ].Aluno.deleteOne({ _id: req.params.id });
      return h.response(deletedStudent);
    }
  },
};
