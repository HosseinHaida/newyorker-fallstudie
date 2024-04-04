"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchError = void 0;
// Send a response based on the type of error occured
const catchError = function (error, res) {
    console.log("-");
    console.log("- ERR!");
    console.log("- Code: ", error.code);
    console.log("- MSG: ", error.msg);
    console.log("-");
    let code = error.code > 599 || error.code < 100 ? 500 : error.code;
    if (!code || typeof code === "string")
        code = 500;
    return res.status(code).send(error);
};
exports.catchError = catchError;
