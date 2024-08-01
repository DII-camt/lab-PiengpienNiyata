const express = require('express');
const cors = require('cors');
const mariadb = require('mariadb');
const schema = require('./schema');
const root = require('./resolvers');
var { createHandler } = require("graphql-http/lib/use/express");
var { ruruHTML } = require("ruru/server");

// Initialize database connection pool
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'mydatabase',
    port: 3307,
    connectionLimit: 5
});

const initializeDatabase = async () => {
    let conn;
    try {
        conn = await pool.getConnection();
        await conn.query(`
            CREATE TABLE IF NOT EXISTS user (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100),
                age INT
            );
        `);
        console.log('User table created or already exists.');
    } catch (err) {
        console.error('Error creating user table:', err);
    } finally {
        if (conn) conn.end();
    }
};

initializeDatabase();

const app = express();
app.use(cors()); // Enable CORS

app.get("/", (_req, res) => {
    res.type("html");
    res.end(ruruHTML({ endpoint: "/graphql" }));
});

// Create and use the GraphQL handler.
app.all(
    "/graphql",
    createHandler({
        schema: schema,
        rootValue: root,
    })
);

// Start the server at port 4000
const port = 4000;
app.listen(port, () => {
    console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`);
});