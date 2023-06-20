import connectDB from '../util/connectDB'
import UserModel from '../../../models/User_model'

const UserBack = async (req, res) => {

    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    console.log(req.query.id)

    try {
	
        await connectDB()
        const saveUser = await UserModel.findOne({ _id: req.query.id })
        
        if (saveUser) {
            console.log(saveUser)
            return res.status(200).json({user: saveUser})
        } else {
            return res.status(400).json({ message: "User not found" })
        }

    } catch (error) {
        return res.status(500).json({ message: "Database access failed" })
    }
}

export default UserBack	