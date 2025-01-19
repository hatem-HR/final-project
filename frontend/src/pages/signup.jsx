import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

import { useSelector } from "react-redux";

const Signup =()=>{
    const history = useNavigate();


    
    const isloggedIn =useSelector((state)=>state.auth.isloggedIn)
    if (isloggedIn ===true) {
        history("/")
    }
    const [Data , setData]= useState({username:"", password:"",email:""})

    const change = (e)=>{
        const {name, value} =e.target;
        setData({...Data,[name]:value})

    };
const submit = async ()=>{
try{
    if(Data.username===""  ||Data.email==="" || Data.password===""){
    
        alert("all fiels are required");
    }
    else {
       const response = await axios.post("http:localhost/6000/api/v1/signin",Data

       )
    setData({ username:"", password:"",email:""})
    console.log(response.data.message)
    history("/login")
}
}
catch(error){
alert(error.response.data.message)
}
};

    return (
        <div className=" h-[98vh] flex items-center justify-center">
<div className="p-4 w-2/6 rounded bg-gray-800">
<div className="text-2xl font-semibold">Signup</div>
<input
type="username"
placeholder="username"
className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
name="username"
onChange={change}
value={Data.username}
/>
<input
type="email"
placeholder="email"
className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
name="email"
required
onChange={change}
value={Data.email}
/>
<input
type="password"
placeholder="password"
className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
name="password"
required
onChange={change}
value={Data.password}
/>
<div className="w-full flex items-center justify-between">
        <button className="bg-blue-400 text-xl font-semibold  text-black px-3 py-2 rounded" onClick={submit}>Sign up 

        </button>
        <Link to="/login" className="text-gray-400 ">Already  having an account? Login here</Link>
        </div>
    


</div>
        </div>
    )
};
export default Signup;