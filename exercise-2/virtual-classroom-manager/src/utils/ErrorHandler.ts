export class ErrorHandler {
    static handle(error: unknown): void {
        if (error instanceof Error) {
            console.error(`[ERROR] ${error.message}`);
        } else {
            console.error('[ERROR] An unexpected error occurred.');
        }
    }
}