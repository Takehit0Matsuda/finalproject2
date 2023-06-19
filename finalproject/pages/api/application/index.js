import connectDB from "../../../config/connectDB"
import Post_model from "../../../models/Post_Model"
import { getSession} from "next-auth/react"

connectDB()

export default async function handler(req, res){
    switch(req.method){
        case "POST":
            await createBrotliDecompress(req,res)
            break;
    }
}

const createPost = async (req,res) => {
    try {
        const session = await getSession({req})
        console.log(session)
    }
    catch (err) {
        return res.status(500).json({msg: err.message})
    }
}