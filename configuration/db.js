import mysql from "mysql2/promise";

const dbconnection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  port: 3306,
  database: "data",
});

export default dbconnection;
