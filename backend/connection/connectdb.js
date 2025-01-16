const mongoose = require("mongoose") ;

const connectdb = async() =>{

try{
const response = mongoose.connect(process.env.MONGO_URL) ;
if(response) {
    console.log(" db connected")
}
}
catch(error) 
{
console.log("error db not connected")
}
}
connectdb() ;