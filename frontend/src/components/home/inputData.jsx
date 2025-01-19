import React from "react";
import { IoClose } from "react-icons/io5";

const InputData = ({ InputDiv, setInputDiv }) => {
  return (
    <>
      <div
        className={`${InputDiv} top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}
      ></div>
      <div
        className={`${InputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}
      >
        <div className="w-2/6 bg-gray-900 p-4 rounded">
          <div className="flex justify-end">
            <button
              className="text-xl"
              onClick={() => setInputDiv("hidden")} // Hide on close
            >
              <IoClose />
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="px-3 py-2 rounded w-full bg-gray-700 my-3"
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Description"
            name="desc"
            className="px-3 py-2 rounded w-full bg-gray-700 my-3"
          />
          <button className="px-3 py-3 bg-blue-400 rounded text-black text-xl">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
