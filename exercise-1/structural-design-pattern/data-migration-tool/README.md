# Legacy Data Conversion System

## Overview

The **Legacy Data Conversion System** is a project that demonstrates the use of the **Adapter Pattern** to seamlessly convert legacy data formats into modern formats. The system integrates an old data source with a new data processing system, providing a scalable solution for migrating or converting legacy data without altering the original system.

### Key Features:
- **Adapter Pattern**: Bridges the gap between the legacy data format and the new system format.
- **Data Conversion**: Transforms legacy data, such as dates stored as strings (`DD/MM/YYYY`), into modern formats (`Date` objects).
- **Logging and Error Handling**: Comprehensive logging and error management ensure that data conversion is reliable and issues are traceable.
- **Performance Optimized**: Processes data efficiently in batches, ensuring minimal performance overhead.
- **Defensive Programming**: Includes validation and defensive programming techniques to ensure data integrity.

## System Architecture

- **Legacy System**: Provides data in an outdated format.
- **Adapter**: Converts legacy data into a format that the new system can understand.
- **New System**: Receives the converted data and processes it according to modern requirements.
- **Logger**: Logs key events such as the start and end of the data conversion process and any errors encountered during the process.

## Project Structure

```
src/
│
├── adapters/
│   └── LegacyDataAdapter.ts   # The adapter that converts legacy data to new format
├── legacy/
│   └── LegacySystem.ts        # The legacy system providing data in old format
├── new/
│   └── NewSystem.ts           # The new system that processes the converted data
├── utils/
│   └── Logger.ts              # Logger utility for system logging
└── index.ts                   # Entry point of the application
```

## Installation

To install and run the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Viswaksena-J/Ei-Study.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Ei-Study/exercise-1/structural-design-pattern/data-migration-tool
   ```

3. **Install dependencies**:
   This project uses Node.js and npm (or Yarn) to manage dependencies. Run the following command to install required packages:
   ```bash
   npm install
   ```

4. **Compile TypeScript**:
   Since the project is written in TypeScript, you need to compile it into JavaScript before running:
   ```bash
   npm run build
   ```

## Running the Application

Once the installation is complete, you can run the program as follows:

1. **Start the Application**:
   After building the project, run the following command to start the application:
   ```bash
   npm start
   ```

2. **View the Logs**:
   The application will display logs in the console, showing the data conversion process, the converted data, and any errors or warnings encountered. Example output might look like this:
   ```
   [INFO]: Starting data conversion process...
   [INFO]: Converted data successfully.
    Processing data in the new format [
    {
        id: '123',
        fullName: 'Viswak sena',
        dateOfBirth: 2003-12-31T18:30:00.000Z
    },
    {
        id: '124',
        fullName: 'Hethav sena',
        dateOfBirth: 2008-05-14T18:30:00.000Z
    }
    ]
    [INFO]: Converted Data: 
    [INFO]: 
            ID: 123,
            Full Name: Viswak sena,
            Date of Birth: 2003-12-31T18:30:00.000Z
        
    [INFO]: 
            ID: 124,
            Full Name: Hethav sena,
            Date of Birth: 2008-05-14T18:30:00.000Z
        
    [INFO]: Data conversion completed successfully.
   ```

### Running Tests

If the project contains unit tests, you can run them with the following command:
```bash
npm test
```

## Usage Example

The system automatically retrieves data from the legacy system, converts it using the Adapter, and passes it to the new system. After installation and running, the program will:
1. Fetch user data in the legacy format from the **Legacy System**.
2. Convert the legacy data using the **LegacyDataAdapter**.
3. Process the converted data in the **New System**.

The application also logs every step, allowing developers and operators to trace the conversion process.

## Conclusion

This solution demonstrates the integration of legacy and modern systems using the **Adapter Pattern**. It emphasizes scalability, maintainability, and adherence to modern best practices such as logging, error handling, and defensive programming. This approach provides a clear path for future migration efforts, ensuring that legacy systems can evolve while maintaining compatibility with new technologies.