const mongoose = require('mongoose');

class DB {
    async connect() {
        if (!process.env.MONGO_URI) {
            console.warn('MongoDB URI is not configured. Starting server without DB connection.');
            return false;
        }

        try {
            await mongoose.connect(process.env.MONGO_URI, {
                serverSelectionTimeoutMS: 3000
            });
            console.log('MongoDB Connected');
            return true;
        } catch (error) {
            console.warn('MongoDB connection failed:', error.message);
            return false;
        }
    }
}

module.exports = new DB();