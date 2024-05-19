import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

const Home = () => {
  // const [scenarios, setScenarios] = useState([]);
  const scenarios = [
    { id: 1, name: "Test Scenario" },
    { id: 2, name: "My Scenario" },
  ];
  const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/scenarios")
      .then((response) => {
        setScenarios(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the scenarios!", error);
      });
  }, []);

  const vehicles = [
    {
      id: 1,
      name: "Bus",
      positionX: 30,
      positionY: 215,
      speed: 3,
      direction: "Towards",
    },
    {
      id: 2,
      name: "Car",
      positionX: 500,
      positionY: 500,
      speed: 5,
      direction: "Upwards",
    },
  ];

  const handleStartSimulation = () => {};

  return (
    <div className="p-4 bg-gray-900  h-screen">
      <div className="bg-gray-500 text-white rounded-md shadow-md mb-4">
        <div className="p-4 flex justify-between items-center">
          <select
            value={selectedScenario.id}
            onChange={(e) =>
              setSelectedScenario(
                scenarios.find((scenario) => scenario.id === +e.target.value)
              )
            }
            className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
          >
            {scenarios.map((scenario) => (
              <option key={scenario.id} value={scenario.id}>
                {scenario.name}
              </option>
            ))}
          </select>
          <div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-1">
              Start Simulation
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1">
              Stop Simulation
            </button>
          </div>
        </div>
        <table className="min-w-full bg-gray-500 text-white">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-4 text-left">Vehicle Id</th>
              <th className="p-4 text-left">Vehicle Name</th>
              <th className="p-4 text-left">Position X</th>
              <th className="p-4 text-left">Position Y</th>
              <th className="p-4 text-left">Speed</th>
              <th className="p-4 text-left">Direction</th>
              <th className="p-4 text-left">Edit</th>
              <th className="p-4 text-left">Delete</th>
            </tr>
          </thead>
          <tbody className="bg-gray-400 text-white">
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id} className="border-t border-gray-50">
                <td className="p-4">{vehicle.id}</td>
                <td className="p-4">{vehicle.name}</td>
                <td className="p-4">{vehicle.positionX}</td>
                <td className="p-4">{vehicle.positionY}</td>
                <td className="p-4">{vehicle.speed}</td>
                <td className="p-4">{vehicle.direction}</td>
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
  );
};

export default Home;
