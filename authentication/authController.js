const User = require("./userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
}


export const register = async () => {
    try {
        const { username, email, password } = req.body;

        if (!name || !email || !password)
            return res.status(400).json({ message: 'All fields are required' });

        const existing = await User.findOne({ email });
        if (existing)
            return res.status(404).json({ message: 'User already exists!' });

        const hashed = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashde });

        const token = generateToken(user._id);

        res.status(201).json({ message: token });
    }
    catch (err) {

    }
    export const login = async () => {
        try {
            const { email, password } = req.body;
            const existing = await User.findOne({ email });

            if (!existing)
                return res.status(404).json({ message: 'User does not exist' });

            const isMatch = bcrypt.compare(password, user.password);
            if(!isMatch)
                return res.status(404).json({message : 'Invalid credentials'});

            const token = generateToken(user._id);
            res.json({token});
        }
        catch (err) {

        }
    }
}