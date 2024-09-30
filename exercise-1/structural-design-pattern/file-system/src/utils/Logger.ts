export class Logger {
    static log(message: string): void {
        console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
    }

    static error(message: string): void {
        console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
    }
}
