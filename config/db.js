const mongoose = require('mongoose');

class DB {
    async connect() {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not set. Add your MongoDB connection string to the root .env file.');
        }

        try {
            await mongoose.connect(process.env.MONGO_URI, {
                serverSelectionTimeoutMS: 10000
            });
            console.log('MongoDB Connected');
        } catch (error) {
            throw new Error(`MongoDB connection failed: ${error.message}`, { cause: error });
        }
    }
}

module.exports = new DB();