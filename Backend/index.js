import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 📦 Routes
app.use("/user", userRoute);
app.use("/book", bookRoute);

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// 🔐 Check if MongoDB URI is present
if (!URI) {
    console.error("❌ MongoDB URI is missing in .env");
    process.exit(1);
}

// 🌐 Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.log("❌ MongoDB connection error:", error);
        process.exit(1);
    }
};
connectDB(); // ⬅️ Important

// ❓ 404 Handler
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// 🚀 Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

// 🧹 Graceful Shutdown
process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        console.log("🛑 MongoDB connection closed due to app termination");
        process.exit(0);
    });
});
