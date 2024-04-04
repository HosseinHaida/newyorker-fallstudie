"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomItem = void 0;
const getRandomItem = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};
exports.getRandomItem = getRandomItem;
