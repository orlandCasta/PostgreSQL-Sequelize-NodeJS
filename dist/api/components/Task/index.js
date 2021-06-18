"use strict";

var express = require("express");

var router = express.Router();

var controller = require("./controller");

router.post("/", controller.createTask);
router.get("/", controller.getTasks);
router.get("/:id", controller.getTaskById);
router["delete"]("/:id", controller.deleteTaskById);
router.put("/:id", controller.updateTaskById);
router.get("/project/:projectId", controller.getTasksByProject);
module.exports = router;