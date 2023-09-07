import { Sequelize } from "sequelize";

const db = new Sequelize('merncrud_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;