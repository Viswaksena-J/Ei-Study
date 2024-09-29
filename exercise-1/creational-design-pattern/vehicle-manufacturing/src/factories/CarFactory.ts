import { VehicleFactory } from './VehicleFactory';
import { Car } from '../models/Car';

export class CarFactory implements VehicleFactory {
  createVehicle(): Car {
    return new Car();
  }
}
