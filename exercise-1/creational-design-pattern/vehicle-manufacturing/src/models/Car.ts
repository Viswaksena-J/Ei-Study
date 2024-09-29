import { Vehicle } from './Vehicle';

export class Car implements Vehicle {
  drive(): string {
    return "Driving a car";
  }
}