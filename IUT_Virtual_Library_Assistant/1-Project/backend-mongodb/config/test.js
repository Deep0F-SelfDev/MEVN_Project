const os = require('os');

module.exports = {
  env: 'test',

  database: {
    connection: 'mongodb://localhost:27017/test',
    transactions: false,
  },

  email: {
    auth: {
      user: 'mock',
    },
  },

  graphiql: false,

  clientUrl: '<insert client url here>',

  defaultUser: '<insert your email here>',

  uploadDir: os.tmpdir(),

  authJwtSecret: '<place a generated random value here>',
};
