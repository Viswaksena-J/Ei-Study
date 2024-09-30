import { Logger } from "./Logger";

export class ErrorHandler {
    static handle(error: Error): void {
        Logger.error(error.message);
    }
}
