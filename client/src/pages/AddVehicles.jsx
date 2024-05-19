import React, { useState } from "react";
import axios from "axios";

const AddVehicles = () => {
  const [scenario, setScenario] = useState("");
  const [vehicleName, setVehicleName] = useState("");
  const [speed, setSpeed] = useState("");
  const [positionX, setPositionX] = useState("");
  const [positionY, setPositionY] = useState("");
  const [direction, setDirection] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    if (positionX < 0 || positionX > 800) {
      setError("Position X should not be > 800 and < 0");
    } else {
      setError("");
      e.preventDefault();
      try {
        const { data } = await axios.post("/vehicles/add-vehicle", {
          scenario,
          vehicleName,
          speed,
          positionX,
          positionY,
          direction,
        });

        if (data.success) {
          alert("Scenario added");
          setScenario("");
          setVehicleName("");
          setSpeed("");
          setError("");
          setPositionX("");
          setPositionY("");
          setDirection("");
        }
      } catch (error) {
        console.error("There was an error adding the vehicle!", error);
        setError("There was an error adding the Vehicle.");
      }
      console.log("Vehicle Added:", {
        scenario,
        vehicleName,
        speed,
        positionX,
        positionY,
        direction,
      });
    }
  };

  const handleReset = () => {
    setScenario("");
    setVehicleName("");
    setSpeed("");
    setPositionX("");
    setPositionY("");
    setDirection("");
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-md w-full max-w-3xl">
        <h2 className="text-2xl mb-4">Add Vehicle</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-400">Scenarios List</label>
            <select
              className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
              value={scenario}
              onChange={(e) => setScenario(e.target.value)}
            >
              <option value="" disabled>
                Select Scenario
              </option>
              <option value="scenario1">Scenario 1</option>
              <option value="scenario2">Scenario 2</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-400">Vehicle Name</label>
            <input
              type="text"
              className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
              value={vehicleName}
              onChange={(e) => setVehicleName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-400">Speed</label>
            <input
              type="number"
              className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-400">Position X</label>
            <input
              type="number"
              className={`mt-1 w-full p-2 bg-gray-700 rounded border ${
                error ? "border-red-500" : "border-gray-600"
              } focus:border-blue-500 focus:outline-none`}
              value={positionX}
              onChange={(e) => setPositionX(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <div>
            <label className="block text-gray-400">Position Y</label>
            <input
              type="number"
              className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
              value={positionY}
              onChange={(e) => setPositionY(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-400">Direction</label>
            <select
              className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
            >
              <option value="" disabled>
                Select Direction
              </option>
              <option value="towards">Towards</option>
              <option value="backwards">Backwards</option>
              <option value="upwards">Upwards</option>
              <option value="downwards">Downwards</option>
            </select>
          </div>
        </div>
        <div className="flex space-x-2 mt-4">
          <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Add
          </button>
          <button
            onClick={handleReset}
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
          >
            Reset
          </button>
          <button
            onClick={() => console.log("Go Back")}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVehicles;
