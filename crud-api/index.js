const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Hi, server is running");
});

app.use(express.json());

let users = [
    { id: 1, name: 'Abhi' },
    { id: 2, name: 'Ravi' }
];

// get route

app.get("/users", (req, res) => {
    res.json(users);
})
// post route
app.post("/users", (req, res) => {
    const newUser = { id: Date.now(), ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

// put route
app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    users = users.map(u => u.id === id ? {...u, ...req.body} : u);
    res.json({message: 'Updated'});
});

// delete route
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(u => u.id !== id);
     res.json({ message: 'Deleted' });
})


const port = 5000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});