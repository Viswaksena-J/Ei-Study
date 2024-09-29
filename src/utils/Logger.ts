export class Logger {
    info(message: string): void {
        console.log(`[INFO] ${message}`);
    }

    error(message: string): void {
        console.error(`[ERROR] ${message}`);
    }

    warn(message: string): void {
        console.warn(`[WARN] ${message}`);
    }
}