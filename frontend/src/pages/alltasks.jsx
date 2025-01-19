import React, { useState } from "react";
import Cards from "../components/home/cards";
import { IoIosAddCircleOutline } from "react-icons/io";
import InputData from "../components/home/inputData";

const AllTasks = () => {
  const [InputDiv, setInputDiv] = useState("hidden"); 

  return (
    <>
      <div>
        <div className="w-full flex justify-end px-4 py-2">
          <button onClick={() => setInputDiv("fixed")}>
            <IoIosAddCircleOutline className="text-3xl text-gray-300" />
          </button>
        </div>
        <Cards home={"true"} InputDiv={InputDiv} />
      </div>
      {}
      <InputData InputDiv={InputDiv} setInputDiv={setInputDiv} />
    </>
  );
};

export default AllTasks;
