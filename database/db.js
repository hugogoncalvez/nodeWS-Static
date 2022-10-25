import { Sequelize } from "sequelize";

const db = new Sequelize('mesaentrada', 'root','Abigail12',{
    host:'localhost',
    dialect:'mysql',
    timezone: '-03:00'
})

export default db;