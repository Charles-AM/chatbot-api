import express from "express";
import FindAllDiseases from "../controllers/findAll.controller.js";
import FindOneDisease from "../controllers/findOne.controller.js";
import AddOneDisease from "../controllers/addOne.controller.js";

const router = express.Router();

router.get("/", FindAllDiseases);
router.get("/:id", FindOneDisease);
router.post("/", AddOneDisease);

export default router;