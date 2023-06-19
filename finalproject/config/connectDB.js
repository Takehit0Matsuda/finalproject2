import mongoose from 'mongoose'

const connectDB = () => {
    if (mongoose.connections[0].readyState){
        console.log('Already connected.')
        return
    }

    mongoose.connect(precess.env.DATABASE_URL, {}, err => {
        if(err) throw err;
        console.log('Connected to mongoDB.')
    })
}