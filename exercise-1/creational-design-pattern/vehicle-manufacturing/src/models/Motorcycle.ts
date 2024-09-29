import { Vehicle } from './Vehicle';

export class Motorcycle implements Vehicle {
  drive(): string {
    return "Riding a motorcycle";
  }
}