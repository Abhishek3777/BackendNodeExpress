const client = require('./redis');

export const cache = async (req, res, next) => {
    const key = req.originalUrl;

    const cachdData = await client.get(key);
    if (cachdData)
        return res.json(JSON.parse(cachdData));

    next();
};