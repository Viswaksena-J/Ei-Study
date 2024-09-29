import { Vehicle } from './Vehicle';

export class Truck implements Vehicle {
  drive(): string {
    return "Driving a truck";
  }
}