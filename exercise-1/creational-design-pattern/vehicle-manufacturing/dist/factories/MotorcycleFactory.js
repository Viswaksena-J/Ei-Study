"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotorcycleFactory = void 0;
const Motorcycle_1 = require("../models/Motorcycle");
class MotorcycleFactory {
    createVehicle() {
        return new Motorcycle_1.Motorcycle();
    }
}
exports.MotorcycleFactory = MotorcycleFactory;
