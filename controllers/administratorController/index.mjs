export default {
  getAdministrator: async (req, h) => {
    return h.response('Your account');
  },
  saveOneAdministrator: async (req, h) => {
    return h.response(req.payload).code(201);
  },
};
