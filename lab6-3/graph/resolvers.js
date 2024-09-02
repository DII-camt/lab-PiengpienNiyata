const mariadb = require('mariadb'); 
 
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'mydatabase',
    port: 3307,
    connectionLimit: 5
});
 
const root = { 
    getUsers: async () => { 
        let conn; 
        try { 
            conn = await pool.getConnection(); 
            const rows = await conn.query('SELECT * FROM user'); 
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