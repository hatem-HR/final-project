import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";

const Cards = (home, setInputDiv) => {
  const data = [
    {
      title: "Hatem",
      desc: "Final project frontend",
      status:"In Complete",
    },
    {
      title: "Hatemm",
      desc: "Final project frontend with more features",
      status:"Completed",
    },
    {
      title: "Hatemmm",
      desc: "Another final project frontend version",
      status:"In Complete",
    },
    {
      title: "Hatemmmm",
      desc: "Extended final project frontend",
      status:"In Complete",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data.map((item, index) => (
        <div className="flex flex-col justify-center items-center bg-gray-800 rounded-sm p-2">
        <div
        
          key={index}
          className="bg-gray-800 text-white p-4 rounded  transition-all"
        >
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-sm text-gray-300 my-2">{item.desc}</p>
          <div className="mt-4 w-full flex items-center gap-4">
            <button
  className={`${
    item.status === "In Complete" ? "bg-red-400" : "bg-green-700"
  } p-2 rounded w-3/6`}
>
  {item.status}
</button>

           <div className="p-3 w-2/6 text-2xl flex justify-center gap-3 ">
           <button><FaRegHeart /></button>
           <button><CiEdit /></button>
           <button><AiOutlineDelete /></button>
           </div>
      
           </div>
           
          </div>

        </div>
        
       
      ))}
      {home === "true" && <button className="flex flex-col justify-center items-center bg-gray-800 rounded-sm p-1 text-gray-300" onClick={()=>setInputDiv("fixed")}>
                <IoIosAddCircleOutline className="text-3xl"/>
          <h2 className="text-2xl mt-4">add task</h2>
</button> }
                
    </div>
     
  );
};

export default Cards;
