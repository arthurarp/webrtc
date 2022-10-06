import { sequelize as postgreSQLConn } from '../databases/postgreSQL'
// import { sequelize as postgreSQLConn } from '@databases/postgreSQL'

export default async () => {
  await postgreSQLConn.authenticate()
    .then(() =>
      console.log('PostgreSQL database successfully connected!!!', true)
    )
    .catch((error: any) =>
      console.log('Failed to connect to PostgreSQL database: ' + error)
    )
}
