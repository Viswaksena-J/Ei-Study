import { VehicleFactory } from '../factories/VehicleFactory';
import { Vehicle } from '../models/Vehicle';
import logger from '../utils/logger';
import { VehicleCreationError } from '../utils/errors';

export class VehicleService {
  private factory: VehicleFactory;

  constructor(factory: VehicleFactory) {
    this.factory = factory;
  }

  createAndDriveVehicle(): string {
    try {
      const vehicle: Vehicle = this.factory.createVehicle();
      logger.info(`Vehicle created: ${vehicle.constructor.name}`);
      return vehicle.drive();
    } catch (error) {
      logger.error('Error creating vehicle', { error });
      throw new VehicleCreationError('Failed to create vehicle');
    }
  }
}