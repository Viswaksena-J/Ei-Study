import { Logger } from "../logger/Logger";

export class ErrorHandler {
    private logger: Logger = Logger.getInstance();

    // Handle transient errors
    public handleTransientError(error: Error): void {
        this.logger.logWarning("Handling transient error");
        try {
            // Logic for transient error handling (e.g., retry)
            // Retry mechanism
            console.log("Retrying operation...");
        } catch (err) {
            this.logger.logError("Failed to handle transient error", err as Error);
            throw new Error("Transient error handling failed");
        }
    }

    // Global error handler for exceptions
    public handleError(error: Error): void {
        this.logger.logError("Global error handler caught an exception", error);
        throw error;  // Rethrow after logging
    }
}
