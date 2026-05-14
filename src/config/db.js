import mongoose from "mongoose";

let cachedConnection = null;

const connectDB = async () => {
  if (cachedConnection) {
    console.log("Using cached MongoDB connection");
    return cachedConnection;
  }

  try {
    const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
    if (!uri) {
      console.error("CRITICAL ERROR: MONGO_URI is undefined!");
      throw new Error("MONGO_URI environment variable is missing.");
    }

    const opts = {
      // Removed bufferCommands: false to allow Mongoose to buffer if connection is slightly delayed
      // but the middleware will still ensure connection is ready
    };

    cachedConnection = await mongoose.connect(uri, opts);
    console.log("MongoDB Connected 🔥");
    return cachedConnection;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    // In serverless, we don't want to exit the process
    // Let the error bubble up so Vercel can handle it
    throw error;
  }
};

export default connectDB;

