const path = require('path')

module.exports = {
  PUBLIC_DIR: path.join(process.cwd(), 'build'),
  MYSQL_CONFIG: {
    host: 'dbproject.3utilities.com',
    user: 'khoadeptrai',
    password: 'Yenni1005',
    database: 'bugtracker',
    // host: 'localhost',
    // user: 'root',
    // password: 'root',
    // database: 'bugtracker',
  },
  secret: 'not-so-secret-anymore',
  tokenExpires: 86400 // 24 hours
}