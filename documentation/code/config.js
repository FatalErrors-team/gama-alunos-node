exports.fileTree = [
  {
    name: 'bcrypt',
    children: [{ name: '_index', path: '/_index', fullPath: 'bcrypt/_index' }],
  },
  {
    name: 'Métodos de Login',
    children: [
      { name: '_index', path: '/_index', fullPath: 'Métodos de Login/_index' },
    ],
  },
  {
    name: 'validators',
    children: [
      { name: 'administratorValidator', children: [] },
      { name: 'studentsValidator', children: [] },
    ],
  },
];
exports.sidebarTree = (title) => ({
  title: '/_index.html',
  children: [
    {
      title: 'Gama Alunos',
      collapsable: false,
      children: [['', '' + title + '']],
    },
    { title: 'bcrypt', collapsable: false, children: ['bcrypt/_index'] },
    {
      title: 'Métodos de Login',
      collapsable: false,
      children: ['Métodos de Login/_index'],
    },
  ],
});
