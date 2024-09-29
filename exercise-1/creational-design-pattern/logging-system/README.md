# Logging System

This project implements a Singleton design pattern to create a centralized logging system for a long-running application. The logging system captures various levels of log messages (INFO, WARNING, ERROR) while also handling errors gracefully.

## Features

- **Singleton Logger**: Ensures only one instance of the logger is created throughout the application.
- **Structured Logging**: Logs are timestamped and categorized by severity levels for easy readability.
- **Error Handling**: Robust handling of transient and global errors with informative logging.
- **Simulated Long-Running Application**: Demonstrates the logging system in action through a simulated application loop.

## Installation

To set up the logging system locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Viswaksena-J/Ei-Study.git
   cd Ei-Study/exercise-1/creational-design-pattern/logging-system
   ```

2. **Install Dependencies:**
   Ensure you have Node.js installed. If not, you can download it from [Node.js official website](https://nodejs.org/). Once Node.js is installed, run:
   ```bash
   npm install
   ```

## Running the Application

To start the logging system, use the following command:

```bash
npm start
```

The application will run for a predefined number of iterations, logging its status and demonstrating error handling.

## Expected Output

When you run the application, you should see log messages similar to the following:

```plaintext
2024-09-29T20:34:42.832Z [INFO] - Application is running, iteration 1
2024-09-29T20:34:42.836Z [INFO] - Application is running, iteration 2
2024-09-29T20:34:42.836Z [ERROR] - Global error handler caught an exception | Error: Simulated exception in main application loop
Stack Trace: Error: Simulated exception in main application loop
...
```

## Conclusion

This logging system demonstrates the application of the Singleton design pattern and best practices in error handling and logging mechanisms. It serves as a foundational component for any long-running application where consistent logging and error management are critical for operational efficiency.