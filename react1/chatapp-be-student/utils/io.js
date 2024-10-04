// // utils/io.js
import { Server } from "socket.io";
// const userController = require("../Controllers/user.controller");
// import userController from "../Controllers/user.controller.js";


export default function(io) {
    io.on("connection", (socket) => {
        console.log("client is connected", socket.id);
    
socket.on("login", async(userName,cb)=>{
//유저정보를저장
    console.log("backend",userName);
    try{
     const user = await userController.saveUser(userName, socket.id);
        cb({ok: true, data:user});
    }catch (error){
        cb({ok: false, error: error.message});
    }
    

 });
    


 socket.on("disconnect", ()=>{
        console.log("user is disconnectde");
    });
});
}


