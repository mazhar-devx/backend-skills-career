import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
    if (!uri) {
      console.error("CRITICAL ERROR: MONGO_URI is undefined!");
      console.error("Available environment variable keys:", Object.keys(process.env).join(", "));
      throw new Error("MONGO_URI environment variable is missing. Please check Railway Variables and make sure the name has NO spaces (e.g. not 'MONGO_URI ').");
    }
    await mongoose.connect(uri);
    console.log("MongoDB Connected 🔥");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
