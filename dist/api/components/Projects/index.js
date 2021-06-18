"use strict";

var express = require("express");

var router = express.Router();

var controller = require("./controller");

router.post("/", controller.createProject);
router.get("/", controller.getProjects);
router.get("/:id", controller.getProjectById);
router["delete"]("/:id", controller.deleteProjectById);
router.put("/:id", controller.updateProjectById);
module.exports = router;