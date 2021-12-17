const env = process.env;

let config = {};

config.db = {};
config.server = {};
config.auth = {};

config.db.host = 'localhost';
config.db.port = 3306;
config.db.username = env.DB_USERNAME;
config.db.password = env.DB_PASSWORD;
config.db.dbName = 'planner';
config.db.type = 'mysql'

config.server.port = 3006;

config.auth.accessTokenSecret = env.ACCESS_TOKEN_SECRET
config.auth.refreshTokenSecret = env.REFRESH_TOKEN_SECRET

module.exports = config;
