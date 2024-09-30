# File System Structure Simulation

This project demonstrates the implementation of a **File System Structure** using the **Composite Design Pattern** in TypeScript. The application models a hierarchical structure where both files and directories are treated as items in the file system. Each directory can contain other directories and files, allowing for a flexible representation of complex file system layouts.

## Project Structure

```
/src
  /interfaces
    IFileSystemItem.ts         # Interface for file system items
  /models
    File.ts                    # Class for File
    Directory.ts               # Class for Directory
  /utils
    Logger.ts                  # Simple logging utility
    ErrorHandler.ts            # Error handling utility
  /validators
    FileValidator.ts            # Validations for File class
  /config.ts                    # Configuration settings (e.g., constants)
  /main.ts                      # Main program entry
```

## Key Features

- **Composite Design Pattern**: Implements a file system where directories can contain both files and other directories, allowing uniform treatment of files and directories.
  
- **Logging**: Logs actions and errors using a centralized logging utility (`Logger.ts`).
  
- **Error Handling**: Centralized error handling with logging of exceptions (`ErrorHandler.ts`).
  
- **Validation**: Defensive programming principles are followed with validations for file size and name (`FileValidator.ts`).
  
- **Performance**: Optimized recursive size calculation for directories.

## Installation and Setup


### Steps to Install

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Viswaksena-J/Ei-Study.git
   cd Ei-Study/exercise-1/structural-design-pattern/file-system
   ```

2. **Install dependencies**:
   After navigating to the project directory, run the following command to install the required dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. **Run the program**:
   Execute the application using the following command:
   ```bash
   npx ts-node src/index.ts
   ```

2. The program will display the file system structure in the console, showing directories and their contents, including files and subdirectories.

### Example Output

```
[LOG] 2024-09-30T10:23:45.123Z: Directory: root
[LOG] 2024-09-30T10:23:45.124Z:   File: file1.txt (500 bytes)
[LOG] 2024-09-30T10:23:45.125Z:   File: file2.txt (1000 bytes)
[LOG] 2024-09-30T10:23:45.126Z:   Directory: subdir
[LOG] 2024-09-30T10:23:45.127Z:     File: file3.txt (200 bytes)
```

---
