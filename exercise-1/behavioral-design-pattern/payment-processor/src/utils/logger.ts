export enum LogLevel {
    INFO,
    WARNING,
    ERROR
}

export class Logger {
    static log(message: string, level: LogLevel = LogLevel.INFO) {
        const timestamp = new Date().toISOString();
        switch (level) {
            case LogLevel.INFO:
                console.log(`[${timestamp}] INFO: ${message}`);
                break;
            case LogLevel.WARNING:
                console.warn(`[${timestamp}] WARNING: ${message}`);
                break;
            case LogLevel.ERROR:
                console.error(`[${timestamp}] ERROR: ${message}`);
                break;
        }
    }
}