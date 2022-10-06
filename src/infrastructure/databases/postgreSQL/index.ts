import { Sequelize } from 'sequelize-typescript'
import serverConfig from '../../config/server'

const dialectOptions = serverConfig.databases.postgreSQL.dbCert
  ? {
      ssl: {
        ca: Buffer.from(
          serverConfig.databases.postgreSQL.dbCert,
          'base64'
        ).toString('utf-8')
      }
    }
  : undefined

const sequelize = new Sequelize(
  serverConfig.databases.postgreSQL.dbName,
  serverConfig.databases.postgreSQL.dbUser,
  serverConfig.databases.postgreSQL.dbPass,
  {
    dialect: 'postgres',
    host: serverConfig.databases.postgreSQL.dbHost,
    port: Number(serverConfig.databases.postgreSQL.dbPort),
    logging: console.log,
    dialectOptions,
    define: {
      timestamps: true
    }
  }
)

export { sequelize }
