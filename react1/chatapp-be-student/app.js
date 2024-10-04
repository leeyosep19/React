import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

// Body parser middleware
app.use(express.json());

// MongoDB 연결
mongoose.connect(process.env.DB)
    .then(() => console.log("Connected to database"))
    .catch(err => console.error("Could not connect to database:", err));

const PORT = process.env.PORT || 5003; 

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app; // app 내보내기
