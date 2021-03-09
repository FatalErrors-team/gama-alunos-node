import hapiMongoose from 'hapi-mongoose';

export default (db, mongoose) => {
  const AlunoSchema = new mongoose.Schema({
    nome: {
      type: String,
    },
  });

  return db.model('Aluno', AlunoSchema);
};
