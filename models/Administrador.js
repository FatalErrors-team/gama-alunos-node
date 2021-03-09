export default (db, mongoose) => {
  const AdministradorSchema = new mongoose.Schema({
    usuario: {
      type: String,
      required: true,
      unique: true,
      minlength: 4,
      maxlength: 20,
    },
    senha: {
      type: String,
      required: true,
    },
    nomeCompleto: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 20,
    },
  });

  return db.model('Administrador', AdministradorSchema);
};
