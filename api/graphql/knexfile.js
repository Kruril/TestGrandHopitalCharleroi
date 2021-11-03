// Update with your config settings.
module.exports = {

  development: {
    client: 'pg',
    connection: {
      port: '54321',
      host: process.env.DB_HOST,
      database: 'GHDC',
      user:     'guillaume',
      password: 'guillaume'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migration'
    }
  },
  staging: {
    client: 'pg',
    connection: {
      port: '54321',
      host: process.env.DB_HOST,
      database: 'GHDC',
      user:     'guillaume',
      password: 'guillaume'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migration'
    }
  },

  production: {
    client: 'pg',
    connection: {
      port: '54321',
      host: process.env.DB_HOST,
      database: 'GHDC',
      user:     'guillaume',
      password: 'guillaume'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migration'
    }
  }
};
