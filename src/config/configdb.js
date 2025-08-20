import { Sequelize } from "sequelize";

const sequelize = new Sequelize('database_development', 'root', '16092004Nt@', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});
let connectDB = async () =>{
  try{
    await sequelize.authenticate();
    console.log('Connection has been successfully');
  }catch(error)
  {
    console.error('Unable ')
  }
}
module.exports = connectDB;
