"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualClassroomManager = void 0;
const Classroom_1 = require("./Classroom");
class VirtualClassroomManager {
    constructor(logger) {
        this.classrooms = new Map();
        this.logger = logger;
    }
    addClassroom(name) {
        if (this.classrooms.has(name)) {
            throw new Error(`Classroom ${name} already exists.`);
        }
        this.classrooms.set(name, new Classroom_1.Classroom(name));
        this.logger.info(`Classroom ${name} has been created.`);
    }
    addStudent(studentId, className) {
        const classroom = this.getClassroom(className);
        classroom.addStudent(studentId);
        this.logger.info(`Student ${studentId} has been enrolled in ${className}.`);
    }
    scheduleAssignment(className, assignmentDetails) {
        const classroom = this.getClassroom(className);
        classroom.scheduleAssignment(assignmentDetails);
        this.logger.info(`Assignment for ${className} has been scheduled.`);
    }
    submitAssignment(studentId, className, assignmentDetails) {
        const classroom = this.getClassroom(className);
        if (!classroom.hasStudent(studentId)) {
            throw new Error(`Student ${studentId} is not enrolled in ${className}.`);
        }
        classroom.submitAssignment(studentId, assignmentDetails);
        this.logger.info(`Assignment submitted by Student ${studentId} in ${className}.`);
    }
    getClassroom(name) {
        const classroom = this.classrooms.get(name);
        if (!classroom) {
            throw new Error(`Classroom ${name} does not exist.`);
        }
        return classroom;
    }
    getClassSize(className) {
        const classroom = this.getClassroom(className);
        return classroom.getStudentCount();
    }
    getClassroomCount() {
        return this.classrooms.size;
    }
    getStudentCount() {
        return Array.from(this.classrooms.values()).reduce((count, classroom) => count + classroom.getStudents().length, 0);
    }
    getAssignmentCount() {
        return Array.from(this.classrooms.values()).reduce((count, classroom) => count + classroom.getAssignments().length, 0);
    }
}
exports.VirtualClassroomManager = VirtualClassroomManager;
