const express = require("express");
const db = require("../data/dbConfig");
const router = express.Router();

//get all cars
router.get("/", (req, res) => {
  db("cars")
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Unable to retrieve cars", err });
    });
});

//get cars by ID
router.get("/:id", (req, res) => {
  const id = req.params;
  db("cars")
    .where(id)
    .first()
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "Unable to locate car with specified ID", err });
    });
});

//create a new car on table
router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then(ids => {
      db("cars")
        .where({ id: ids[0] })
        .then(newFax => {
          res.status(201).json(newFax);
        });
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Add new car data failed", err });
    });
});

module.exports = router;
