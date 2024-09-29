"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleCreationError = void 0;
class VehicleCreationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'VehicleCreationError';
    }
}
exports.VehicleCreationError = VehicleCreationError;
