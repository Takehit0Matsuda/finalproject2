import connectDB from '../util/connectDB'
import UserModel from '../../../models/User_model';
import bcrypt from 'bcrypt';


const RegisterBack = async (req, res) => {

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    try {
        await connectDB()
        const checkUser = await UserModel.findOne({ email: req.body.email })
	
        if (checkUser) {

            return res.status(400).json({ success: false, message: 'Account already exists' })
        
        } else {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = {
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword
            };

            await UserModel.create(newUser)
            return res.status(200).json({ success: true, message: 'User created' })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}

export default RegisterBack