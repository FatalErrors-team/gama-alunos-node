export default {
  getStudents: async (req, h) => {
    return h.response('All students');
  },
  getSingleStudent: async (req, h) => {
    return h.response('One student');
  },
  saveOneStudent: async (req, h) => {
    return h.response('Save a student').code(201);
  },
  updateOneStudent: async (req, h) => {
    return h.response('Update one student').code(204);
  },
  deleteOneStudent: async (req, h) => {
    return h.response('Delete one student').code(204);
  },
};
