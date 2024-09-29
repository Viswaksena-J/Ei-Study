# Payment Processing System

## Overview

The Payment Processing System is a TypeScript-based application that demonstrates the implementation of the Strategy design pattern for handling multiple payment methods. This project is part of a company assignment to showcase best practices in software design and architecture.

## Features

- Support for multiple payment methods (Credit Card, PayPal)
- Extensible architecture using the Strategy design pattern
- Robust error handling and input validation
- Comprehensive logging system
- Interactive command-line interface

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Viswaksena-J/Ei-Study.git
   ```

2. Navigate to the project directory:
   ```
   cd Ei-Study/exercise-1/behavioral-design-pattern/payment-processing-system
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Running the Application

1. Compile the TypeScript files:
   ```
   npm run build
   ```

2. Start the application:
   ```
   npm start
   ```

## Usage

Upon running the application, you will be presented with a menu:

```
Payment Processing System
1. Pay with Credit Card
2. Pay with PayPal
3. Exit
Choose an option:
```

Follow the prompts to enter payment details and process the transaction.

## Project Structure

```
src/
├── paymentStrategies/
│   ├── PaymentStrategy.ts
│   ├── CreditCardStrategy.ts
│   └── PayPalStrategy.ts
├── utils/
│   ├── constants.ts
│   ├── errors.ts
│   ├── logger.ts
│   └── validators.ts
├── PaymentProcessor.ts
└── index.ts
```

## Conclusion

This Payment Processing System demonstrates the application of the Strategy design pattern in a real-world scenario. It provides a flexible and extensible architecture for handling various payment methods, showcasing best practices in TypeScript development and software design.
