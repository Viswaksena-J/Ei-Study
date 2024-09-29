"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VirtualClassroomManager_1 = require("./models/VirtualClassroomManager");
const Logger_1 = require("./utils/Logger");
const CommandHandler_1 = require("./utils/CommandHandler");
const ErrorHandler_1 = require("./utils/ErrorHandler");
const logger = new Logger_1.Logger();
const manager = new VirtualClassroomManager_1.VirtualClassroomManager(logger);
const commandHandler = new CommandHandler_1.CommandHandler(manager, logger);
process.stdin.setEncoding('utf-8');
console.log('Welcome to the Virtual Classroom Manager. Type "help" for available commands.');
process.stdin.on('data', (input) => {
    const trimmedInput = input.trim();
    if (trimmedInput.toLowerCase() === 'exit') {
        console.log('Exiting Virtual Classroom Manager. Goodbye!');
        process.exit(0);
    }
    try {
        commandHandler.handleCommand(trimmedInput);
    }
    catch (error) {
        ErrorHandler_1.ErrorHandler.handle(error);
    }
});
process.stdin.on('end', () => {
    console.log('Virtual Classroom Manager session ended.');
});
