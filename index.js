const express = require('express'); 
const app = express();
const port = 3000;
const items = ['Apple', 'Banana', 'Orange'];

app.use(express.json()); // Move this line before the routes

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const item = req.body.item;
    items.push(item); // Corrected variable name
    res.json(items);
});

app.use(express.static('public'));

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

app.use((req, res, next) => {       
    console.log(`${req.method} ${req.url}`); // Corrected typo
    next();
}); 

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



