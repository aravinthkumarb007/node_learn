import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        // Basic Validation
        if (!userName) {
            return res.status(400).json({ message: "Username is required" })
        }

        if (!email) {
            return res.status(400).json({ message: "Email is required" })
        }

        if (!password) {
            return res.status(400).json({ message: "Password is required" })
        }
        // Existing user validation
        const existing = await User.findOne({ email: email.toLowerCase() })
        if (existing) {
            return res.status(400).json({ message: "User Already exists!" })
        }
        // create user
        const user = await User.create({
            userName,
            email: email.toLowerCase(),
            password,
            loggedIn: false
        })
        res.status(201).json({
            message: "User Created Successfully",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!",
            error: error.message
        })
        console.log("Resgister User Error",
            error)
    }
}

export {
    registerUser
}