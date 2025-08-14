import { Sequelize ,DataTypes} from 'sequelize'
import dotenv from "dotenv"
dotenv.config()
const config={
    DB_HOST:process.env.DB_HOST,
DB_PORT:process.env.DB_PORT,
DB_NAME:process.env.DB_NAME,
DB_USER:process.env.DB_USER,
DB_PASS:process.env.DB_PASS,
}
export default async function (){
// const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASS, {
//   host:config.DB_HOST,
//   dialect: 'postgres'
// })
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // needed for Render/Postgres
    }
  },
})
try {
  await sequelize.authenticate();
  console.log(`Connection has been established successfully.`.bgGreen.yellow);
  return({sequelize,DataTypes})
} catch (error) {
  console.error(`Unable to connect to the database:`.bgRed.white, error);
}
}