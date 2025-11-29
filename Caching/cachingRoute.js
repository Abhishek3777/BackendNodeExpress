const express = require('express');
const router = express.Router();

router.get("/doctors", cache, async (req, res) => {
    const doctors = await Doctor.find();

    await client.set(req.originalUrl, JSON.stringify(doctors), {
        EX: 60
    });
    res.json(doctors);
})