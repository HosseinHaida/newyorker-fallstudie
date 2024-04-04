"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CatchError_1 = require("../../helpers/CatchError");
const ProductFiltersBuilder_1 = require("../product/ProductFiltersBuilder");
const ProductModel_1 = __importDefault(require("../product/ProductModel"));
exports.default = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { gender } = req.query;
    if ((gender && !["male", "female"].includes(gender)) || !gender)
        return (0, CatchError_1.catchError)({ msg: "no gender specified", code: 400 }, res);
    try {
        const accessory = yield ProductModel_1.default.FetchSingle(new ProductFiltersBuilder_1.ProductFiltersBuilder({
            gender,
            category: "accessory",
        }));
        const innerWear = yield ProductModel_1.default.FetchSingle(new ProductFiltersBuilder_1.ProductFiltersBuilder({
            gender,
            category: "innerWear",
        }));
        const outerWear = yield ProductModel_1.default.FetchSingle(new ProductFiltersBuilder_1.ProductFiltersBuilder({
            gender,
            category: "outerWear",
        }));
        if (!accessory || !innerWear || !outerWear)
            return (0, CatchError_1.catchError)({ msg: "Product fetch from NewYorker failed", code: 500 }, res);
        const outfit = { accessory, innerWear, outerWear };
        const data = { item: outfit };
        res.status(200).send(data);
    }
    catch (error) {
        const err = error;
        return (0, CatchError_1.catchError)({ msg: err.message, code: 500 }, res);
    }
});
