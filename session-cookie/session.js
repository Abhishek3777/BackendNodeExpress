const express = requrie('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'secret123',
    resave: false,
    cookie: { maxAge: 60000 }
}));

app.get("/login", (req, res) => {
    req.session.user = { id: 1, name: 'jOHN' };
    res.send('Logged in, session created');
});

app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.send(`Welcome ${req.session.user, name}`);
    }
    else {
        res.send('Please login ');
    }
})