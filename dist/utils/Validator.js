"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
class Validator {
    static validateStudentId(studentId) {
        // Implement your student ID validation logic here
        return /^S\d{6}$/.test(studentId); // Example: S123456
    }
    static validateClassName(className) {
        // Implement your class name validation logic here
        return /^[A-Za-z0-9\s]{3,50}$/.test(className);
    }
}
exports.Validator = Validator;
