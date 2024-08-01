const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to create index.html if it doesn't exist
app.use((req, res, next) => {
    const indexPath = path.join(__dirname, 'index.html');
    if (!fs.existsSync(indexPath)) {
        fs.writeFile(indexPath, JSON.stringify([{ 'id': 1, 'name': 'A' }]), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error creating index.html');
                return;
            }
            console.log('index.html created successfully');
            next(); // Proceed to the next middleware or route
        });
    } else {
        next();
    }
});

// Route to get all users
app.get('/Users', (req, res) => {
    const json_user = JSON.parse(fs.readFileSync(path.join(__dirname, 'user.json')));
    res.json(json_user);
});

// Route to get a user by ID
app.get('/Users/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    let data = fs.readFileSync(path.join(__dirname, 'user.json'));
    let items = JSON.parse(data);

    const user = items.find(item => item.id === itemId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// Route to update a user by ID
app.put('/Users/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const updatedItem = req.body;
    let data = fs.readFileSync(path.join(__dirname, 'user.json'));
    let items = JSON.parse(data);

    console.log(items);
    // Find the index of the item to update
    const index = items.findIndex(item => item.id === itemId);

    if (index !== -1) {
        items[index] = { ...items[index], ...updatedItem };
        fs.writeFileSync(path.join(__dirname, 'user.json'), JSON.stringify(items, null, 2));
        res.json(items[index]);
    } else {
        res.status(404).send('User not found');
    }
});

app.post('/addUsers', async (req, res) => {
    let conn;
    try {
        conn = await mysql.createConnection({
            host: 'localhost',
            user: 'your_username',
            password: 'your_password',
            database: 'your_database'
        });
        console.log(req.body);
        const { name, age } = req.body;
        await conn.query(`INSERT INTO user (name, age) VALUES (?, ?)`, [name, age]);
        res.send('Data inserted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal server error');
    } finally {
        if (conn) conn.end();
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});