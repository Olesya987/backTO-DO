const express = require("express");
const router = express.Router();

const {
  getTasks,
  createTask,
  changeTask,
  deleteTask,
} = require("../controllers/task.controller");

router.get("/get", getTasks);
router.post("/post", createTask);
router.patch("/patch", changeTask);
router.delete("/del", deleteTask);

module.exports = router;
