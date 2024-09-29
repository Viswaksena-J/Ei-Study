export class Classroom {
    private students: Set<string> = new Set();
    private assignments: Map<string, Set<string>> = new Map();

    constructor(public readonly name: string) {}

    addStudent(studentId: string): void {
        this.students.add(studentId);
    }

    removeStudent(studentId: string): void {
        this.students.delete(studentId);
    }

    hasStudent(studentId: string): boolean {
        return this.students.has(studentId);
    }

    scheduleAssignment(assignmentDetails: string): void {
        this.assignments.set(assignmentDetails, new Set());
    }

    submitAssignment(studentId: string, assignmentDetails: string): void {
        const submissions = this.assignments.get(assignmentDetails);
        if (submissions) {
            submissions.add(studentId);
        }
    }

    getStudentCount(): number {
        return this.students.size;
    }

    getStudents(): string[] {
        return Array.from(this.students);
    }

    getAssignments(): string[] {
        return Array.from(this.assignments.keys());
    }
}
