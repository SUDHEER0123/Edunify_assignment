import mysql from "mysql2/promise";

const dbconnection = await mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12675500",
  password: "DJpFPgtdQP",
  port: 3306,
  database: "sql12675500",
});

export default dbconnection;
