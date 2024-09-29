import { Logger } from "./Logger";

export class ErrorHandler {
    static handle(error: Error): void {
        Logger.error(error.message);
        // Further error handling logic, e.g., saving to logs or alerting
    }
}
