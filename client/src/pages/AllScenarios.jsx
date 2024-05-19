import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

const AllScenarios = () => {
  const [scenarios, setScenarios] = useState([{}]);

  useEffect(() => {
    axios
      .get("/scenarios/add-scinario")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setScenarios(response.data);
        } else if (response.data && Array.isArray(response.data.scenarios)) {
          setScenarios(response.data.scenarios);
        } else {
          console.error("Unexpected response format", response.data);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the scenarios!", error);
      });
  }, []);

  return (
    <div>
      <div className="p-4 bg-gray-900 h-screen">
        <div className="bg-gray-800 text-white rounded-md shadow-md">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-xl">All Scenarios</h2>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1">
                New Scenario
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-1">
                Add Vehicle
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-1">
                Delete All
              </button>
            </div>
          </div>
          <table className="min-w-full bg-gray-900 text-white">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-4 text-left">Scenario Id</th>
                <th className="p-4 text-left">Scenario Name</th>
                <th className="p-4 text-left">Scenario Time</th>
                <th className="p-4 text-left">Number of Vehicles</th>
                <th className="p-4 text-left">Add Vehicle</th>
                <th className="p-4 text-left">Edit</th>
                <th className="p-4 text-left">Delete</th>
              </tr>
            </thead>
            <tbody>
              {scenarios.map((scenario) => (
                <tr
                  key={scenario.id}
                  className="border-t border-gray-700 text-white"
                >
                  <td className="p-4">{scenario.id}</td>
                  <td className="p-4">{scenario.name}</td>
                  <td className="p-4">{scenario.time}</td>
                  <td className="p-4">{scenario.vehicles}</td>
                  <td className="p-4">
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                      <IoAdd />
                    </button>
                  </td>
                  <td className="p-4">
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                      <MdModeEdit />
                    </button>
                  </td>
                  <td className="p-4">
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                      <MdOutlineDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllScenarios;
