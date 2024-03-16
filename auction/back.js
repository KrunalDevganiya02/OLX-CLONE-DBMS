const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// In-memory data for simplicity. In a real-world scenario, you'd use a database.
const items = [];
// const users = {};

app.use(bodyParser.json());

// Enable CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// User registration
// app.post('/register', (req, res) => {
//     const { username, password } = req.body;

//     if (username && password) {
//         users[username] = { password, balance: 1000 };
//         res.json({ message: 'User registered successfully' });
//     } else {
//         res.status(400).json({ error: 'Invalid registration data' });
//     }
// });

// User login
// app.post('/login', (req, res) => {
//     const { username, password } = req.body;

//     if (users[username] && users[username].password === password) {
//         res.json({ message: 'Login successful' });
//     } else {
//         res.status(401).json({ error: 'Invalid username or password' });
//     }
// });

// Item listing
app.post('/list', (req, res) => {
    const { name, description, starting_bid, seller } = req.body;
    const item = { name, description, starting_bid, current_bid: starting_bid, seller };

    items.push(item);
    res.json({ message: 'Item listed successfully' });
});

// Place bid
app.post('/bid', (req, res) => {
    const { item_name, bidder, bid_amount } = req.body;

    const item = items.find((i) => i.name === item_name);

    if (item) {
        if (bid_amount > item.current_bid) {
            item.current_bid = bid_amount;
            res.json({ message: 'Bid placed successfully' });
        } else {
            res.status(400).json({ error: 'Bid amount must be higher than the current bid' });
        }
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
