"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleService = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const errors_1 = require("../utils/errors");
class VehicleService {
    constructor(factory) {
        this.factory = factory;
    }
    createAndDriveVehicle() {
        try {
            const vehicle = this.factory.createVehicle();
            logger_1.default.info(`Vehicle created: ${vehicle.constructor.name}`);
            return vehicle.drive();
        }
        catch (error) {
            logger_1.default.error('Error creating vehicle', { error });
            throw new errors_1.VehicleCreationError('Failed to create vehicle');
        }
    }
}
exports.VehicleService = VehicleService;
