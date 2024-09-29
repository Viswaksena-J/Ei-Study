"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarFactory = void 0;
const Car_1 = require("../models/Car");
class CarFactory {
    createVehicle() {
        return new Car_1.Car();
    }
}
exports.CarFactory = CarFactory;
