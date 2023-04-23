"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log("Woo it worked");
    console.log(res.data);
  })
  .catch((err) => console.log("opps! did't worked", err));
