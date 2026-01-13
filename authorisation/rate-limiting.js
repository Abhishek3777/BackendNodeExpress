const rateLimit = requrire();

const loginLimitter = ({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 60,
    message: 'Too many requests, try again later',
});

app.get("/login", loginLimitter, async (req, res) => {

});