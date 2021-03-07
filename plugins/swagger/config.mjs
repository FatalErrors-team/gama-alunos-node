export default {
  info: {
    title: 'Gama Alunos',
    version: '1.0',
    description: 'API de gerenciamento de alunos com autenticação JWT',
    license: {
      name: 'Licença MIT',
      url:
        'https://github.com/FatalErrors-team/gama-alunos-node/blob/main/LICENSE',
    },
  },
  securityDefinitions: {
    jwt: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  tags: [
    {
      name: 'Alunos',
      description: 'Endpoints da API de aluno',
    },
    {
      name: 'Administrador',
      description: 'Endpoints do administrador',
    },
  ],
  grouping: 'tags',
};
