import { VirtualClassroomManager } from '../models/VirtualClassroomManager';
import { Logger } from './Logger';

export class CommandHandler {
    constructor(
        private manager: VirtualClassroomManager,
        private logger: Logger
    ) {}

    handleCommand(input: string): void {
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

    private addClassroom(args: string[]): void {
        if (args.length !== 1) {
            throw new Error('Usage: add_classroom <classroom_name>');
        }
        this.manager.addClassroom(args[0]);
    }

    private addStudent(args: string[]): void {
        if (args.length !== 2) {
            throw new Error('Usage: add_student <student_id> <classroom_name>');
        }
        this.manager.addStudent(args[0], args[1]);
    }

    private scheduleAssignment(args: string[]): void {
        if (args.length < 2) {
            throw new Error('Usage: schedule_assignment <classroom_name> <assignment_details>');
        }
        const [className, ...assignmentDetails] = args;
        this.manager.scheduleAssignment(className, assignmentDetails.join(' '));
    }

    private submitAssignment(args: string[]): void {
        if (args.length < 3) {
            throw new Error('Usage: submit_assignment <student_id> <classroom_name> <assignment_details>');
        }
        const [studentId, className, ...assignmentDetails] = args;
        this.manager.submitAssignment(studentId, className, assignmentDetails.join(' '));
    }

    private showClassSize(args: string[]): void {
        if (args.length !== 1) {
            throw new Error('Usage: class_size <classroom_name>');
        }
        const className = args[0];
        const classSize = this.manager.getClassSize(className);
        console.log(`Number of students in ${className}: ${classSize}`);
    }


    private showHelp(): void {
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

    private showStatus(): void {
        console.log(`
Current Status:
  Number of Classrooms: ${this.manager.getClassroomCount()}
  Number of Students: ${this.manager.getStudentCount()}
  Number of Assignments: ${this.manager.getAssignmentCount()}
        `);
    }
}