const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB= async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        process.exit(1); // Exit process if connection fails
    }
}

connectDB();

exports.module=connectDB