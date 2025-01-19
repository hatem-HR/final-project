import React , { useState } from "react";

import axios from "axios";
import { authActions } from "../store/auth";
import { Link  } from "react-router-dom";
import {useSelector , useDispatch } from "react-redux";
const Login =()=>{
     const [Data , setData]= useState({username:"", password:""})
     const isloggedIn =useSelector((state)=>state.auth.isloggedIn)
     if (isloggedIn ===true) {
         history("/")
     }
     const dispatche = useDispatch()
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
       const response = await axios.post("http:localhost/6000/api/v1/login",Data

       )
    setData({ username:"", password:""})
    localStorage.setItem("id",response.data.id);
    localStorage.setItem("token",response.data.token);
    dispatche(authActions.login())
   
}
}
catch(error){
alert(error.response.data.message)
}
};
    return     <div className=" h-[98vh] flex items-center justify-center">
    <div className="p-4 w-2/6 rounded bg-gray-800">
    <div className="text-2xl font-semibold">Login</div>
    <input
    type="username"
    placeholder="username"
    className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
    name="username"
    required
    value={Data.username}
    onChange={change}
    />
    
    <input
    type="password"
    placeholder="password"
    className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
    name="password"
    required
    value={Data.password}
    onChange={change}
    />
    <div className="w-full flex items-center justify-between">
        <button className="bg-blue-400 text-xl font-semibold  text-black px-3 py-2 rounded" onClick={submit}>Login 

        </button>
        <Link to="/signup" className="text-gray-400">Not having an account? signup here</Link>
        </div>
    
    
    </div>
            </div>
};

export default Login;