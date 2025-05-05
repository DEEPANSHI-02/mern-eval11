const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`MongoDB connected ${conn.connection.host}`);
    }
    catch (error) {
        console.error(`error ${error.message}`);
        process.exit(1);
    };
}

// const connectDB =  mongoose.connect(process.env.MONGODB_URI);

module.exports = connectDB;