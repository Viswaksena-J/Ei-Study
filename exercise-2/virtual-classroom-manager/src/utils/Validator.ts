export class Validator {
    static validateStudentId(studentId: string): boolean {
        // Implement your student ID validation logic here
        return /^S\d{6}$/.test(studentId); // Example: S123456
    }

    static validateClassName(className: string): boolean {
        // Implement your class name validation logic here
        return /^[A-Za-z0-9\s]{3,50}$/.test(className);
    }
}