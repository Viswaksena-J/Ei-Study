"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
class ErrorHandler {
    static handle(error) {
        if (error instanceof Error) {
            console.error(`[ERROR] ${error.message}`);
        }
        else {
            console.error('[ERROR] An unexpected error occurred.');
        }
    }
}
exports.ErrorHandler = ErrorHandler;
