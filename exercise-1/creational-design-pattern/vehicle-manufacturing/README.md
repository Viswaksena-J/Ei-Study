# Vehicle Manufacturing System

## Overview

The Vehicle Manufacturing System is a TypeScript application that demonstrates the Factory Method design pattern in the context of a vehicle production line. This system allows users to create different types of vehicles (cars, motorcycles, and trucks) through a command-line interface.

## Use Case

This application simulates a scenario where a vehicle manufacturing company needs a flexible system to manage the production of various vehicle types. The Factory Method pattern is employed to:

1. Allow the addition of new vehicle types without modifying existing code.
2. Encapsulate the object creation process, making the system more maintainable.
3. Provide a consistent interface for creating different types of vehicles.

The system is designed to run continuously, accepting user input to determine which type of vehicle to manufacture. This simulates a real-world scenario where a production line might receive orders throughout the day for different vehicle types.

## Features

- Command-line interface for user interaction
- Support for manufacturing cars, motorcycles, and trucks
- Extensible design allowing easy addition of new vehicle types
- Robust error handling and logging
- Adherence to TypeScript best practices and coding standards

## Installation

To set up the Vehicle Manufacturing System on your local machine, follow these steps:

1. Ensure you have Node.js (version 12 or later) and npm installed on your system.

2. Clone the repository:
   ```
   git clone https://github.com/Viswaksena-J/Ei-Study.git
   cd Ei-Study/exercise-1/creational-design-pattern/vehicle-manufacturing-system
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

4. Compile the TypeScript files:
   ```
   npx tsc
   ```

## Running the Application

To run the Vehicle Manufacturing System:

1. Ensure you're in the project root directory.

2. Execute the compiled application:
   ```
   node dist/app.js
   ```

3. Follow the on-screen prompts to manufacture vehicles:
   - Enter '1' for Car
   - Enter '2' for Motorcycle
   - Enter '3' for Truck
   - Enter 'q' to quit the application

## Project Structure

```
src/
├── models/
│   ├── Vehicle.ts
│   ├── Car.ts
│   ├── Motorcycle.ts
│   └── Truck.ts
├── factories/
│   ├── VehicleFactory.ts
│   ├── CarFactory.ts
│   ├── MotorcycleFactory.ts
│   └── TruckFactory.ts
├── services/
│   └── VehicleService.ts
├── utils/
│   ├── logger.ts
│   └── errors.ts
└── app.ts
```

## Technologies Used

- TypeScript
- Node.js
- Winston (for logging)