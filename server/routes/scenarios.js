const express = require("express");
const router = express.Router();
const fs = require("fs-extra");
const dbFile = "./data/db.json";

router.get("/get-scinario", async (req, res) => {
  const data = await fs.readJson(dbFile);
  res.json(data.scenarios);
});

router.post("/add-scinario", async (req, res) => {
  const newScenario = req.body;
  const data = await fs.readJson(dbFile);
  data.scenarios.push(newScenario);
  await fs.writeJson(dbFile, data);
  res.status(201).json(newScenario);
});

router.put("/update-scinario/:id", async (req, res) => {
  const { id } = req.params;
  const updatedScenario = req.body;
  const data = await fs.readJson(dbFile);
  const index = data.scenarios.findIndex(
    (scenario) => scenario.id === parseInt(id)
  );
  if (index !== -1) {
    data.scenarios[index] = updatedScenario;
    await fs.writeJson(dbFile, data);
    res.json(updatedScenario);
  } else {
    res.status(404).send("Scenario not found");
  }
});

router.delete("/delete-scinario/:id", async (req, res) => {
  const { id } = req.params;
  const data = await fs.readJson(dbFile);
  data.scenarios = data.scenarios.filter(
    (scenario) => scenario.id !== parseInt(id)
  );
  await fs.writeJson(dbFile, data);
  res.status(204).send();
});

module.exports = router;
