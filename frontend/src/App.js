import React, { useEffect } from "react";
import Home from "./pages/home";
import AllTasks from "./pages/alltasks";
import Importanttasks from "./pages/importanttasks";
import CompletedTasks from "./pages/completedtasks";
import IncompletedTasks from "./pages/incompletedtasks";
import { Routes, Route, navigate,useNavigate } from "react-router-dom";

import Signup from "./pages/signup";
import Login from "./pages/login"
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";


const App = () => {
  const navigate = useNavigate();
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const dispatch = useDispatch()
useEffect(() =>{
  if(localStorage.getItem("id") && localStorage.getItem("token")) {
    dispatch(authActions.login());
  }
 else if (!isLoggedin) {
    navigate("/signup");
  }
}, []);

  return (
    <div className="bg-gray-900 text-white h-screen p-2 relative">
      
        <Routes>
          <Route exact path="/" element={<Home />} > 
          <Route index element={<AllTasks/>} />
          <Route path="/importanttasks" element={<Importanttasks/>} />
          <Route path="/completedtasks" element={<CompletedTasks/>} />
          <Route path="/incompletedtasks" element={<IncompletedTasks/>} />
          
          </Route>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>

          
        </Routes>
      
    </div>
  );
};
export default App;
