export class LoggerException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "LoggerException";
    }
}
