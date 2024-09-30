import { Logger } from "../utils/Logger";

export class FileValidator {
    static validateFileSize(size: number): boolean {
        if (size < 0) {
            Logger.error("File size cannot be negative");
            return false;
        }
        return true;
    }

    static validateFileName(name: string): boolean {
        if (!name || name.length === 0) {
            Logger.error("File name cannot be empty");
            return false;
        }
        return true;
    }
}
