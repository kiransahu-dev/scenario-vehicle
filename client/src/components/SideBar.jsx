import React from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-200 w-64 h-screen flex flex-col">
      <div
        onClick={() => navigate("/")}
        className="text-black py-4 px-6 hover:bg-gray-300 cursor-pointer"
      >
        Home
      </div>
      <div
        onClick={() => navigate("/add-scenario")}
        className="text-black py-4 px-6 hover:bg-gray-300 cursor-pointer"
      >
        Add Scenario
      </div>
      <div
        onClick={() => navigate("/all-scenario")}
        className="text-black py-4 px-6 hover:bg-gray-300 cursor-pointer"
      >
        All Scenarios
      </div>
      <div
        onClick={() => navigate("/add-vehicle")}
        className="text-black py-4 px-6 hover:bg-gray-300 cursor-pointer"
      >
        Add Vehicle
      </div>
    </div>
  );
};

export default SideBar;
