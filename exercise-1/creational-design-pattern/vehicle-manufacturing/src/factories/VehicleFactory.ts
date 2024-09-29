import { Vehicle } from '../models/Vehicle';

export interface VehicleFactory {
  createVehicle(): Vehicle;
}