require('dotenv').config()

const serverConfig = {
  databases: {
    postgreSQL: {
      dbHost: process.env.PG_DB_HOST,
      dbPort: process.env.PG_DB_PORT,
      dbName: process.env.PG_DB_NAME,
      dbUser: process.env.PG_DB_USER,
      dbPass: process.env.PG_DB_PASS,
      dbCert: process.env.PG_DB_CERTIFICATE
    },
    mongoDB: {}
  }
}

export default serverConfig
