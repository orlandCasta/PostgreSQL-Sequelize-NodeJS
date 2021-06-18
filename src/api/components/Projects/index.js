const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/", controller.createProject);
router.get("/", controller.getProjects);
router.get("/:id", controller.getProjectById);
router.delete("/:id", controller.deleteProjectById);
router.put("/:id", controller.updateProjectById)

module.exports = router;
