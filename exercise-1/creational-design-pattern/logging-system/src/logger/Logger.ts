export class Logger {
    private static instance: Logger;
    
    // Private constructor prevents direct instantiation
    private constructor() { }

    // Returns the single instance of the Logger (Singleton)
    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    // Log information
    public logInfo(message: string): void {
        this.writeLog("INFO", message);
    }

    // Log warnings
    public logWarning(message: string): void {
        this.writeLog("WARNING", message);
    }

    // Log errors
    public logError(message: string, error?: Error): void {
        this.writeLog("ERROR", message, error);
    }

    // Private method to write the log message
    private writeLog(level: string, message: string, error?: Error): void {
        const timestamp = new Date().toISOString();
        let logMessage = `${timestamp} [${level}] - ${message}`;
        
        if (error) {
            logMessage += ` | Error: ${error.message}\nStack Trace: ${error.stack}`;
        }

        // Simulate writing to a log file or external logging system
        console.log(logMessage);
    }
}
