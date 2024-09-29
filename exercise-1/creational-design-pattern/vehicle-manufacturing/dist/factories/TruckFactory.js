"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruckFactory = void 0;
const Truck_1 = require("../models/Truck");
class TruckFactory {
    createVehicle() {
        return new Truck_1.Truck();
    }
}
exports.TruckFactory = TruckFactory;
