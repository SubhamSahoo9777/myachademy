import { Sequelize ,DataTypes} from 'sequelize'
export default async function (){
const sequelize = new Sequelize('academic', 'postgres', '0637', {
  host: 'localhost',
  dialect: 'postgres'
})
try {
  await sequelize.authenticate();
  console.log(`Connection has been established successfully.`.bgGreen.yellow);
  return({sequelize,DataTypes})
} catch (error) {
  console.error(`Unable to connect to the database:`.bgRed.white, error);
}
}