import React, { useState } from "react";
import axios from "axios";

const AddScenarios = () => {
  const [scenarioName, setScenarioName] = useState("");
  const [scenarioTime, setScenarioTime] = useState("");
  const [error, setError] = useState("");

  const handleName = (e) => {
    setScenarioName(e.target.value);
  };

  const handleTime = (e) => {
    setScenarioTime(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!scenarioName || !scenarioTime) {
      setError("Scenario name and time are required");
      return;
    } else {
      setError("");
    }

    console.log("Scenario Added:", { scenarioName, scenarioTime });

    try {
      const { data } = await axios.post("/scenarios/add-scinario", {
        scenarioName: scenarioName,
        scenarioTime: scenarioTime,
      });

      if (data.success) {
        alert("Scenario added");
        setScenarioName("");
        setScenarioTime("");
      }
    } catch (error) {
      console.error("There was an error adding the scenario!", error);
      setError("There was an error adding the scenario.");
    }
  };

  const handleReset = () => {
    setScenarioName("");
    setScenarioTime("");
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-800 p-6 rounded-md w-full max-w-md">
        <h2 className="text-2xl mb-4">Add Scenario</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400">Scenario Name</label>
            <input
              type="text"
              className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
              value={scenarioName}
              onChange={handleName}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">
              Scenario Time (seconds)
            </label>
            <input
              type="number"
              className={`mt-1 w-full p-2 bg-gray-700 rounded border ${
                error ? "border-red-500" : "border-gray-600"
              } focus:border-blue-500 focus:outline-none`}
              value={scenarioTime}
              onChange={handleTime}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <div className="flex space-x-2">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            >
              Add
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={() => console.log("Go Back")}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddScenarios;
