const bcrypt = require('bcryptjs');
const prisma = require('../utils/prisma'); // Importing the Prisma client
const jwt = require('jsonwebtoken');

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate token
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: '30d'
        });

        res.json({
            id: user.id,
            email: user.email,
            token:token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

exports.userRegister = async (req, res) => {
    try {
        const { email, password } = req.body;

        //check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        //hash password (you should use a library like bcrypt for this)
        const hashedPassword = await bcrypt.hash(password, 10);

        //create new user
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword
            }
        });

        //genarate a token (you should use a library like jsonwebtoken for this)
        const token = jwt.sign({ userId: newUser.id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: 'User registered successfully', user: newUser, token: token });


    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' });
    }
}