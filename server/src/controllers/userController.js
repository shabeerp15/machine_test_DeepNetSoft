import User from '../models/userModel.js'
import bcrypt from 'bcrypt'

const userRegister = async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email })
        if (userExists) {
            res.status(400)
            throw new Error('User already exists')
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

const userLogin = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(401)
            throw new Error('Invalid Email address')
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        )

        if (!validPassword) {
            res.status(401)
            throw new Error('Incorrect Password')
        }

        const { password, ...others } = user._doc

        res.status(200).json({ ...others })
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export { userRegister, userLogin }
