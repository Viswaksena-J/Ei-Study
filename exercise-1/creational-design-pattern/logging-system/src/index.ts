import { Logger } from "./logger/Logger";
import { ErrorHandler } from "./utils/ErrorHandler";

function main() {
    const logger = Logger.getInstance();
    const errorHandler = new ErrorHandler();

    try {
        // Simulate application running for a long time, gathering user inputs
        for (let i = 0; i < 5; i++) {
            logger.logInfo(`Application is running, iteration ${i + 1}`);
            
            // Simulate an error on the 3rd iteration
            if (i === 2) {
                throw new Error("Simulated exception in main application loop");
            }
        }
    } catch (error) {
        errorHandler.handleError(error as Error);
    }
}

main();
