import express from "express";
import http from "http"; // http 모듈 import
import { Server } from "socket.io"; // socket.io 서버 import
import ioUtil from "./utils/io.js"; // ioUtil import

const app = express();
const PORT = process.env.PORT || 5003;

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
    },
});

// ioUtil 호출
ioUtil(io);

// 서버 리스닝
httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
