"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OutfitController_1 = __importDefault(require("./OutfitController"));
const router = express_1.default.Router();
router.get("/random", OutfitController_1.default.fetchRandom);
exports.default = router;
