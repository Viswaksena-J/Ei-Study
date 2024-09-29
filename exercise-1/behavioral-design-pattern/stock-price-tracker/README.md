# Stock Price Tracker

## Project Overview

The **Stock Price Tracker** is a TypeScript-based application demonstrating the implementation of the **Observer Design Pattern**. The application simulates a real-time stock market price notification system, where users (observers) can subscribe to specific stocks (subjects) and receive price updates whenever the stock price changes. Users can unsubscribe at any time and stop receiving notifications.

## Design Pattern Used

- **Observer Design Pattern**: This pattern is used to create a one-to-many relationship between the stock (subject) and its subscribers (observers). When a stock price changes, all the observers subscribed to that stock are notified automatically, without the need for manual polling.

## Key Features

- **Real-Time Notifications**: Users are notified immediately when the price of their subscribed stocks changes.
- **Subscription Management**: Users can subscribe or unsubscribe from stock updates at any time.
- **Logging**: Detailed logging for all key actions such as user registration, unsubscription, stock price updates, and notifications.
- **Error Handling**: The system is designed to handle errors gracefully, including invalid stock prices and notification errors.

## Project Structure

```
src/
|-- observers/
|   |-- StockObserver.ts
|   |-- User.ts
|
|-- subjects/
|   |-- StockSubject.ts
|
|-- utils/
|   |-- Logger.ts
|   |-- ErrorHandler.ts
|   |-- Validation.ts
|
|-- main.ts
|-- types.ts
```

- `StockSubject`: Manages the stock's price and notifies observers when there are changes.
- `StockObserver`: Represents a user that subscribes to stock price updates.
- `Logger`: Handles logging of events.
- `ErrorHandler`: Manages error handling across the system.
- `Validation`: Provides validation utilities to ensure correct data is used throughout the application.

## Installation and Setup

To install and run this application locally, follow the steps below:


### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Viswaksena-J/Ei-Study.git
   cd Ei-Study/exercise-1/behavioral-design-pattern/stock-price-tracker/stock-price-tracker
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Compile the TypeScript code to JavaScript:

   ```bash
   npm run build
   ```

### Running the Application

Once the project is built, you can start the application using the following command:

```bash
npm start
```

### Example Output

When you run the application, the console will output logs showing the registration of users, stock price updates, notifications to observers, and unsubscriptions. Example:

```bash
[LOG]: Somu subscribed to Google
[LOG]: Ramu subscribed to Google
[LOG]: Stock Google updated to $1550
[LOG]: Somu received update: Google is now $1550
[LOG]: Ramu received update: Google is now $1550
[LOG]: Somu unsubscribed by Google
[LOG]: Stock Google updated to $1600
[LOG]: Ramu received update: Google is now $1600
```

## How It Works

1. **User Registration**: Users subscribe to specific stocks to receive updates.
2. **Stock Price Update**: Whenever a stock price is updated, all registered users are notified.
3. **Unsubscription**: Users can unsubscribe from updates, and they will no longer receive notifications.

The application is designed to run continuously, processing new stock price updates as they come in, and notifying the users appropriately.

## Conclusion

This project showcases the power of the **Observer Design Pattern** in real-time notification systems. The stock price tracker system is a simplified yet robust solution that can be extended to real-world use cases, including stock market apps, push notification services, and event-driven architectures.