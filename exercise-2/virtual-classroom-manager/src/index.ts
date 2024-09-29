import { VirtualClassroomManager } from './models/VirtualClassroomManager';
import { Logger } from './utils/Logger';
import { CommandHandler } from './utils/CommandHandler';
import { ErrorHandler } from './utils/ErrorHandler';

const logger = new Logger();
const manager = new VirtualClassroomManager(logger);
const commandHandler = new CommandHandler(manager, logger);

process.stdin.setEncoding('utf-8');

console.log('Welcome to the Virtual Classroom Manager. Type "help" for available commands.');

process.stdin.on('data', (input: string) => {
    const trimmedInput = input.trim();
    if (trimmedInput.toLowerCase() === 'exit') {
        console.log('Exiting Virtual Classroom Manager. Goodbye!');
        process.exit(0);
    }
    
    try {
        commandHandler.handleCommand(trimmedInput);
    } catch (error) {
        ErrorHandler.handle(error);
    }
});

process.stdin.on('end', () => {
    console.log('Virtual Classroom Manager session ended.');
});