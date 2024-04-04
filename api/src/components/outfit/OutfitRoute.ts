import express from "express"

import OutfitController from "./OutfitController"

const router = express.Router()

router.get("/random", OutfitController.fetchRandom)

export default router
