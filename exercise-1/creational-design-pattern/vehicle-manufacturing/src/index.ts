import { CarFactory } from './factories/CarFactory';
import { MotorcycleFactory } from './factories/MotorcycleFactory';
import { TruckFactory } from './factories/TruckFactory';
import { VehicleService } from './services/VehicleService';
import logger from './utils/logger';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu(): Promise<string> {
  return new Promise((resolve) => {
    rl.question('Choose a vehicle type (1: Car, 2: Motorcycle, 3: Truck, q: Quit): ', (answer) => {
      resolve(answer.trim().toLowerCase());
    });
  });
}

async function main() {
  while (true) {
    const choice = await showMenu();

    if (choice === 'q') {
      logger.info('Application terminated by user');
      rl.close();
      break;
    }

    let vehicleService: VehicleService;

    switch (choice) {
      case '1':
        vehicleService = new VehicleService(new CarFactory());
        break;
      case '2':
        vehicleService = new VehicleService(new MotorcycleFactory());
        break;
      case '3':
        vehicleService = new VehicleService(new TruckFactory());
        break;
      default:
        console.log('Invalid choice. Please try again.');
        continue;
    }

    try {
      const result = vehicleService.createAndDriveVehicle();
      console.log(result);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
      } else {
        console.error('An unknown error occurred');
      }
    }
  }
}

main().catch((error) => {
  logger.error('Unhandled error in main function', { error });
  process.exit(1);
});