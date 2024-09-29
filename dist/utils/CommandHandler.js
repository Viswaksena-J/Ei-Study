"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandHandler = void 0;
class CommandHandler {
    constructor(manager, logger) {
        this.manager = manager;
        this.logger = logger;
    }
    handleCommand(input) {
        const [command, ...args] = input.split(' ');
        switch (command.toLowerCase()) {
            case 'add_classroom':
                this.addClassroom(args);
                break;
            case 'add_student':
                this.addStudent(args);
                break;
            case 'schedule_assignment':
                this.scheduleAssignment(args);
                break;
            case 'submit_assignment':
                this.submitAssignment(args);
                break;
            case 'class_size':
                this.showClassSize(args);
                break;
            case 'help':
                this.showHelp();
                break;
            case 'status':
                this.showStatus();
                break;
            default:
                this.logger.warn(`Unknown command: ${command}`);
                this.showHelp();
        }
    }
    addClassroom(args) {
        if (args.length !== 1) {
            throw new Error('Usage: add_classroom <classroom_name>');
        }
        this.manager.addClassroom(args[0]);
    }
    addStudent(args) {
        if (args.length !== 2) {
            throw new Error('Usage: add_student <student_id> <classroom_name>');
        }
        this.manager.addStudent(args[0], args[1]);
    }
    scheduleAssignment(args) {
        if (args.length < 2) {
            throw new Error('Usage: schedule_assignment <classroom_name> <assignment_details>');
        }
        const [className, ...assignmentDetails] = args;
        this.manager.scheduleAssignment(className, assignmentDetails.join(' '));
    }
    submitAssignment(args) {
        if (args.length < 3) {
            throw new Error('Usage: submit_assignment <student_id> <classroom_name> <assignment_details>');
        }
        const [studentId, className, ...assignmentDetails] = args;
        this.manager.submitAssignment(studentId, className, assignmentDetails.join(' '));
    }
    showClassSize(args) {
        if (args.length !== 1) {
            throw new Error('Usage: class_size <classroom_name>');
        }
        const className = args[0];
        const classSize = this.manager.getClassSize(className);
        console.log(`Number of students in ${className}: ${classSize}`);
    }
    showHelp() {
        console.log(`
Available commands:
  add_classroom <classroom_name>
  add_student <student_id> <classroom_name>
  schedule_assignment <classroom_name> <assignment_details>
  submit_assignment <student_id> <classroom_name> <assignment_details>
  class_size <classroom_name>
  status
  help
  exit
        `);
    }
    showStatus() {
        console.log(`
Current Status:
  Number of Classrooms: ${this.manager.getClassroomCount()}
  Number of Students: ${this.manager.getStudentCount()}
  Number of Assignments: ${this.manager.getAssignmentCount()}
        `);
    }
}
exports.CommandHandler = CommandHandler;
