const express = require("express");
const router = express.Router();
const fs = require("fs-extra");
const dbFile = "./data/db.json";

router.get("/get-vehicle", async (req, res) => {
  const data = await fs.readJson(dbFile);
  res.json(data.vehicles);
});

router.post("/add-vehicle", async (req, res) => {
  const newVehicle = req.body;
  const data = await fs.readJson(dbFile);
  data.vehicles.push(newVehicle);
  await fs.writeJson(dbFile, data);
  res.status(201).json(newVehicle);
});

router.put("/update-vehicle/:id", async (req, res) => {
  const { id } = req.params;
  const updatedVehicle = req.body;
  const data = await fs.readJson(dbFile);
  const index = data.vehicles.findIndex(
    (vehicle) => vehicle.id === parseInt(id)
  );
  if (index !== -1) {
    data.vehicles[index] = updatedVehicle;
    await fs.writeJson(dbFile, data);
    res.json(updatedVehicle);
  } else {
    res.status(404).send("Vehicle not found");
  }
});

router.delete("/delete-vehicle/:id", async (req, res) => {
  const { id } = req.params;
  const data = await fs.readJson(dbFile);
  data.vehicles = data.vehicles.filter(
    (vehicle) => vehicle.id !== parseInt(id)
  );
  await fs.writeJson(dbFile, data);
  res.status(204).send();
});

module.exports = router;
