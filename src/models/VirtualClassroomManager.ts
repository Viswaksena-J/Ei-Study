import { Classroom } from './Classroom';
import { Logger } from '../utils/Logger';

export class VirtualClassroomManager {
    private classrooms: Map<string, Classroom> = new Map();
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
    }

    addClassroom(name: string): void {
        if (this.classrooms.has(name)) {
            throw new Error(`Classroom ${name} already exists.`);
        }
        this.classrooms.set(name, new Classroom(name));
        this.logger.info(`Classroom ${name} has been created.`);
    }

    addStudent(studentId: string, className: string): void {
        const classroom = this.getClassroom(className);
        classroom.addStudent(studentId);
        this.logger.info(`Student ${studentId} has been enrolled in ${className}.`);
    }

    scheduleAssignment(className: string, assignmentDetails: string): void {
        const classroom = this.getClassroom(className);
        classroom.scheduleAssignment(assignmentDetails);
        this.logger.info(`Assignment for ${className} has been scheduled.`);
    }

    submitAssignment(studentId: string, className: string, assignmentDetails: string): void {
        const classroom = this.getClassroom(className);
        if (!classroom.hasStudent(studentId)) {
            throw new Error(`Student ${studentId} is not enrolled in ${className}.`);
        }
        classroom.submitAssignment(studentId, assignmentDetails);
        this.logger.info(`Assignment submitted by Student ${studentId} in ${className}.`);
    }

    private getClassroom(name: string): Classroom {
        const classroom = this.classrooms.get(name);
        if (!classroom) {
            throw new Error(`Classroom ${name} does not exist.`);
        }
        return classroom;
    }

    getClassSize(className: string): number {
        const classroom = this.getClassroom(className);
        return classroom.getStudentCount();
    }

    getClassroomCount(): number {
        return this.classrooms.size;
    }

    getStudentCount(): number {
        return Array.from(this.classrooms.values()).reduce((count, classroom) => count + classroom.getStudents().length, 0);
    }

    getAssignmentCount(): number {
        return Array.from(this.classrooms.values()).reduce((count, classroom) => count + classroom.getAssignments().length, 0);
    }
}