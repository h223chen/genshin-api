module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DB_HOST'),
        port: env.int('DB_PORT'),
        database: env('DB_NAME'),
        username: env('DB_USER'),
        password: env('DB_PASS'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
