import mongoose from "mongoose";

/**
 * Connect to the MongoDB database.
 * @async
 * @returns {Promise<void>} A promise that resolves when the connection is successful.
 * @throws {Error} Throws an error if the connection fails.
 */

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected ${conn.connection.host}`);
    } catch (error /** @type {Error}  */) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
