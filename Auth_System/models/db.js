import mysql from 'mysql2/promise.js';
import 'dotenv/config.js';

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: "", 
  database: process.env.DATABASE,
  secret: process.env.SECRET,
  port:3306
});

export default pool;