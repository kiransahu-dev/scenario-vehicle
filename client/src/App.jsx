import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddVehicles from "./pages/AddVehicles";
import AddScenarios from "./pages/AddScenarios";
import AllScenarios from "./pages/AllScenarios";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex h-screen">
          <SideBar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-vehicle" element={<AddVehicles />} />
              <Route path="/add-scenario" element={<AddScenarios />} />
              <Route path="/all-scenario" element={<AllScenarios />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
