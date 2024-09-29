# Virtual Classroom Manager

## Overview

Virtual Classroom Manager is a TypeScript-based console application designed to manage virtual classrooms for an EdTech platform. It provides functionality for creating classrooms, enrolling students, scheduling assignments, and handling assignment submissions.

## Features

- Create and manage virtual classrooms
- Enroll students in classrooms
- Schedule assignments for specific classrooms
- Handle assignment submissions from students
- View current status of classrooms, students, and assignments

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Viswaksena-J/virtual-classroom-manager
   ```

2. Navigate to the project directory:
   ```
   cd virtual-classroom-manager
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Building the Project

To compile the TypeScript code to JavaScript, run:

```
npm run build
```

This will create a `dist` folder with the compiled JavaScript files.

## Running the Application

After building the project, you can start the application by running:

```
npm start
```

## Usage

Once the application is running, you can use the following commands:

- `add_classroom <classroom_name>`: Create a new virtual classroom
- `add_student <student_id> <classroom_name>`: Enroll a student in a classroom
- `schedule_assignment <classroom_name> <assignment_details>`: Schedule an assignment for a classroom
- `submit_assignment <student_id> <classroom_name> <assignment_details>`: Submit an assignment for a student
- `status`: View the current status of classrooms, students, and assignments
- `help`: Display available commands
- `exit`: Exit the application

Example usage:

```
add_classroom S7-AIEA
add_student aie21035 S7-AIEA
schedule_assignment S7-AIEA S7-AIEA Algebra Quiz 1
submit_assignment aie21035 S7-AIEA Algebra Quiz 1
status
exit
```

## Development

For development with automatic recompilation, run:

```
npm run dev
```

This will watch for file changes and recompile the TypeScript code automatically.

## Project Structure

```
virtual-classroom-manager/
├── src/
│   ├── models/
│   │   ├── Classroom.ts
│   │   └── VirtualClassroomManager.ts
│   ├── utils/
│   │   ├── CommandHandler.ts
│   │   ├── ErrorHandler.ts
│   │   ├── Logger.ts
│   │   └── Validator.ts
│   └── index.ts
├── package.json
└── tsconfig.json
```

## Conclusion

This Virtual Classroom Manager demonstrates the application of object-oriented programming principles, SOLID design principles, and various design patterns. It provides a robust foundation for managing virtual classrooms, with potential for further enhancements and extensions to meet evolving educational needs in the digital space.
