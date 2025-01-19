import React from "react";
import Home from "./pages/home";
import AllTasks from "./pages/alltasks";
import Importanttasks from "./pages/importanttasks";
import CompletedTasks from "./pages/completedtasks";
import IncompletedTasks from "./pages/incompletedtasks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login"

const App = () => {
  return (
    <div className="bg-gray-900 text-white h-screen p-2 relative">
      <Router>
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
      </Router>
    </div>
  );
};
export default App;
