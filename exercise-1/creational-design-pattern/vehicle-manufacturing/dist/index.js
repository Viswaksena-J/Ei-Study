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
const CarFactory_1 = require("./factories/CarFactory");
const MotorcycleFactory_1 = require("./factories/MotorcycleFactory");
const TruckFactory_1 = require("./factories/TruckFactory");
const VehicleService_1 = require("./services/VehicleService");
const logger_1 = __importDefault(require("./utils/logger"));
const readline_1 = __importDefault(require("readline"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
function showMenu() {
    return new Promise((resolve) => {
        rl.question('Choose a vehicle type (1: Car, 2: Motorcycle, 3: Truck, q: Quit): ', (answer) => {
            resolve(answer.trim().toLowerCase());
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            const choice = yield showMenu();
            if (choice === 'q') {
                logger_1.default.info('Application terminated by user');
                rl.close();
                break;
            }
            let vehicleService;
            switch (choice) {
                case '1':
                    vehicleService = new VehicleService_1.VehicleService(new CarFactory_1.CarFactory());
                    break;
                case '2':
                    vehicleService = new VehicleService_1.VehicleService(new MotorcycleFactory_1.MotorcycleFactory());
                    break;
                case '3':
                    vehicleService = new VehicleService_1.VehicleService(new TruckFactory_1.TruckFactory());
                    break;
                default:
                    console.log('Invalid choice. Please try again.');
                    continue;
            }
            try {
                const result = vehicleService.createAndDriveVehicle();
                console.log(result);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error(`Error: ${error.message}`);
                }
                else {
                    console.error('An unknown error occurred');
                }
            }
        }
    });
}
main().catch((error) => {
    logger_1.default.error('Unhandled error in main function', { error });
    process.exit(1);
});
