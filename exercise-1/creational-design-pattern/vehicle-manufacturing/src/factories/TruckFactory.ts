import { VehicleFactory } from './VehicleFactory';
import { Truck } from '../models/Truck';

export class TruckFactory implements VehicleFactory {
  createVehicle(): Truck {
    return new Truck();
  }
}