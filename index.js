const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello form my personal smarty pant!! with auto restart')
})

const users = [
    { id: 1, name: "Sabana", email: 'sabana@gamail.com', number: '017888888' },
    { id: 2, name: "Sabnoor", email: 'Sabnoor@gamail.com', number: '017888888' },
    { id: 3, name: "Shucorita", email: 'Shucorita@gamail.com', number: '017888888' },
    { id: 4, name: "Shuconda", email: 'Shuconda@gamail.com', number: '017888888' },
    { id: 5, name: "Srabinti", email: 'Srabinti@gamail.com', number: '017888888' },
    { id: 6, name: "Sabila", email: 'Sabila@gamail.com', number: '017888888' },
    { id: 7, name: "Shohana", email: 'Shohana@gamail.com', number: '017888888' },
]

// app.get('/users', (req, res) => {
//     res.send(users)
// })

// filter by query parameter
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request:', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'orange'])
});


app.listen(port, () => {
    console.log('Listing to port', port)
});  