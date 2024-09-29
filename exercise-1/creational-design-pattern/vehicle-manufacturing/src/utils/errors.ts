export class VehicleCreationError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'VehicleCreationError';
    }
  }
  