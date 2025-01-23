import mongoose from "mongoose";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cached = (global as any).mongoose || { conn: null, promise: null };

export const connecttodatabse = async (mongodb_uri = process.env.mongodb_uri) => {
    
    if (cached.conn) return cached.conn

    if (!mongodb_uri) throw new Error("MONGODB_URI is not defined")

    cached.promise = cached.promise || mongoose.connect(mongodb_uri)

    cached.conn = await cached.promise

    return cached.conn

} 