import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportantOutline, MdIncompleteCircle } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const data = [
    {
      title: "All Tasks",
      icon: <CgNotes />,
      link: "/",
    },
    {
      title: "Important Tasks",
      icon: <MdLabelImportantOutline />,
      link: "/importanttasks",
    },
    {
      title: "Completed Tasks",
      icon: <IoCheckmarkDoneCircleOutline />,
      link: "/completedtasks",
    },
    {
      title: "Incomplete Tasks",
      icon: <MdIncompleteCircle />,
      link: "/incompletedtasks",
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-xl font-semibold">Task Manager</h1>
        <h1 className="mb-1 text-gray-400">example@gmail.com</h1>
        <hr className="mb-4" />
      </div>
      <div>
        {data.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="my-2 flex items-center hover:bg-gray-700 p-2 rounded transition-all"
          >
            {item.icon} <span className="ml-2">{item.title}</span>
          </Link>
        ))}
      </div>
      <div className="mt-4">
        <button className="bg-gray-600 w-full p-2 rounded">Log out</button>
      </div>
    </>
  );
};

export default Sidebar;
