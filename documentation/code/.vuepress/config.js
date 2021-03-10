// auto generated sidebar
const { sidebarTree } = require('../config.js');

const tree = { ...sidebarTree('Início') };

module.exports = {
  dest: 'dist',
  locales: {
    '/': {
      title: 'Gama Alunos DOC',
      description: 'Generate jsdoc markdown files for vuepress',
    },
  },
  themeConfig: {
    editLinks: true,
    sidebarDepth: 1,
    docsDir: '/code/',
    sidebar: [
      {
        title: 'Documentação V1',
        path: '/_index.html',
        children: [
          {
            title: 'Gama Alunos',
            collapsable: false,
            children: [['', 'Início']],
          },
          { title: 'bcrypt', collapsable: false, children: ['bcrypt/_index'] },
          {
            title: 'Métodos de Login',
            collapsable: false,
            children: ['Métodos de Login/_index'],
          },
        ],
      },
    ],
  },
};
