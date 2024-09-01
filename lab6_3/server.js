const { GraphQLObjectType, GraphQLSchema, GraphQLString } =
    require('graphql');
const express = require('express');
const mariadb = require('mariadb');
const schema = require('./schema');
const root = require('./resolvers');
var { createHandler } = require("graphql-http/lib/use/express")
var { ruruHTML } = require("ruru/server")
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '662110202',
    database: 'mydatabase',
    connectionLimit: 5 // จ านวนการเชื่อมต่อสูงสุด
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
const port = 3000;
app.use(
    "/graphql",
    createHandler({
        schema: schema,
        rootValue: root,
    })
)
// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
})
app.listen(port, () => {
    console.log("Running a GraphQL API server at http://localhost:3000/graphql");
});