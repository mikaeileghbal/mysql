const express = require("express");
const router = express.Router();
const programinglanguages = require("../services/programminglanguages");

router.get("/", async function (req, res, next) {
  try {
    res.json(await programinglanguages.getMultiple(req.query.page));
  } catch (err) {
    console.error("Error while getting programming languages", err.message);
    next(err);
  }
});

router.post("/", async function (req, res, next) {
  console.log("request recieved", req.body);
  try {
    res.json(await programinglanguages.create(req.body));
  } catch (err) {
    console.error("Errorwhile creating programming language", err.message);
    next(err);
  }
});

router.put("/:id", async function (req, res, next) {
  try {
    res.json(await programinglanguages.update(req.params.id, req.body));
  } catch (err) {
    console.error("Error while updating programming language");
    next(err);
  }
});

router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await programinglanguages.remove(req.params.id));
  } catch (err) {
    console.error("Error while deleting programming language");
    next(err);
  }
});

module.exports = router;
