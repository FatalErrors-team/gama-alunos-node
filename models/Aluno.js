export default (db, mongoose) => {
  const AlunoSchema = new mongoose.Schema({
    nome: {
      type: String,
      required: true,
      minlength: 4,
    },
    email: {
      type: String,
      required: true,
    },
    telefone: {
      type: String,
      required: true,
      minlength: 8,
    },
    nota01: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    nota02: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    notaApresentacao: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    notaTrabalho: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },
    media: {
      type: Number,
      min: 0,
      max: 10,
    },
    conceito: {
      type: String,
      enum: ['APROVADO', 'REPROVADO'],
    },
    endereco: {
      CEP: String,
      logradouro: String,
      numero: Number,
    },
    curso: {
      nome: String,
      disciplina: String,
    },
  });

  return db.model('Aluno', AlunoSchema);
};
