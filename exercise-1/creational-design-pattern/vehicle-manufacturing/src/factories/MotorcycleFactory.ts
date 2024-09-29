import { VehicleFactory } from './VehicleFactory';
import { Motorcycle } from '../models/Motorcycle';

export class MotorcycleFactory implements VehicleFactory {
  createVehicle(): Motorcycle {
    return new Motorcycle();
  }
}