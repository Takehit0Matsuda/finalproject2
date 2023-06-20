import jwt from "jsonwebtoken"
import connectDB from '../util/connectDB'
import UserModel from '../../../models/User_model'
import bcrypt from 'bcrypt';

const LoginBack = async (req, res) => {

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    try {
	
        await connectDB()
        const saveUser = await UserModel.findOne({ email: req.body.email })
        
        if (saveUser) {
            const match = await bcrypt.compare(req.body.password, saveUser.password);
            if (match) {
                const tokenObj = {username: saveUser.username, mail: saveUser.email}
                const token = jwt.sign(tokenObj, process.env.NEXT_PUBLIC_SECRET_KEY, { expiresIn: "2days" })
                return res.status(200).json({ message: "Login Success\nToken: JWT "+token, success: true, user: saveUser, token: "JWT "+token })
            } else {
                return res.status(400).json({ message: "Password is wrong." })
            }
        } else {
            return res.status(400).json({ message: "This email is not used, please signup!" })
        }

    } catch (error) {
        return res.status(400).json({ message: "Login Failed" })
    }
}

export default LoginBack	