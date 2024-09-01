const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  port:3307,
  password: "662110202",
  database: "mydatabase",
  connectionLimit: 5, // จ านวนการเชื่อมต่อสูงสุด
});
const root = {
  getUsers: async () => {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query("SELECT * FROM user");
      return rows;
    } catch (err) {
      console.error(err);

      return [];
    } finally {
      if (conn) conn.end();
    }
  },
  getUsers_by_name: async ({name}) => {
    let conn;
    try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM user where name=?',[name]);
    return rows;
    } catch (err) {
    console.error(err);
    return [];
    } finally {
    if (conn) conn.end();
    }
    }
};
module.exports = root;