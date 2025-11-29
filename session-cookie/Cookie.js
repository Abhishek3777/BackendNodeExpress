const epxress = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

app.get("/set-cookie", (req, res) => {
    res.cookie("username", "adam", {httpOnly: true, maxAge: 1 * 1000 * 60})
    res.send("cookie set");
});

app.get("/get-cookie", (req,res) => {
    res.send(`Cookie value : ${req.cookies.username}`);
});
