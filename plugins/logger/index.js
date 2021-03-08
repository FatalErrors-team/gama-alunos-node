import laabr from 'laabr';

const options = {
  formats: { onPostStart: ':time :start :level :message' },
  tokens: { start: () => '[start]' },
  indent: 0,
};

export default async (server) => {
  await server.register({ plugin: laabr, options: {} });
};
