import '@babel/polyfill'
import { config } from 'dotenv'
import express from 'express'
import sendEmails from './routes/sendEmails'
import Sequelize from 'sequelize'

// Run the config command to access .env file data
config()

// Destructure the data from .env file
const { PORT, DB_HOST, DB_DIALECT, DB_USER, DB_PASS, DB_PORT, DB_NAME } = process.env;

// Self-invoking async function to run the server
(async () => {
  try {
    // Define app
    const app = express()

    // Define the database connection
    const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
      dialect: DB_DIALECT,
      host: DB_HOST,
      port: DB_PORT,
      logging: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    })

    // Test Connection to DB
    await sequelize.authenticate()

    // Define a new route
    app.use('/sendEmails', sendEmails(sequelize))

    // Start the app
    app.listen(PORT, () => console.log(`API runing in http://localhost:${PORT}`))
  } catch (e) {
    console.error(e)
  }
})()
