import {io} from "socket.io-client"
const socket = io("http://localhost:5003");
// const url = 'mongodb+srv://wsw8186:mongodb+srv://dytpqdytqp70:<db_password>@cluster0.8jg6r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
export default socket;
