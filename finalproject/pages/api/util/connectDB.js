import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        if (mongoose.connections[0].readyState) {
        console.log('Already connected.');
        return;
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB.');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw new Error()
    }
};

export default connectDB;