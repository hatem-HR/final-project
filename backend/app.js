const express = require ("express") ;
const app = express() ;
require("dotenv").config();
require("./connection/connectdb")
const cors = require ("cors");
const UserAPI = require("./routs/user")
const TaskAPI = require("./routs/task")

app.use(cors());
app.use(express.json())

app.use("/api/v1", UserAPI);
app.use("/api/v2", TaskAPI);
//localhost:1000/apTi/v1/sign-in

app.use("/" , (req,res) =>{
    res.send("hello from backend")
}) ;

const PORT = 6000 ;
app.listen(PORT ,() =>{
    console.log("server started")
} )