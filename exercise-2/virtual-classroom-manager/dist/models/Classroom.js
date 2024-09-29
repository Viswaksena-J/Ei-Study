"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classroom = void 0;
class Classroom {
    constructor(name) {
        this.name = name;
        this.students = new Set();
        this.assignments = new Map();
    }
    addStudent(studentId) {
        this.students.add(studentId);
    }
    removeStudent(studentId) {
        this.students.delete(studentId);
    }
    hasStudent(studentId) {
        return this.students.has(studentId);
    }
    scheduleAssignment(assignmentDetails) {
        this.assignments.set(assignmentDetails, new Set());
    }
    submitAssignment(studentId, assignmentDetails) {
        const submissions = this.assignments.get(assignmentDetails);
        if (submissions) {
            submissions.add(studentId);
        }
    }
    getStudentCount() {
        return this.students.size;
    }
    getStudents() {
        return Array.from(this.students);
    }
    getAssignments() {
        return Array.from(this.assignments.keys());
    }
}
exports.Classroom = Classroom;
