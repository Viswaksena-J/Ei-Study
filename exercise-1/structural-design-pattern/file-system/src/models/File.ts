import { IFileSystemItem } from "../interfaces/IFileSystemItem";
import { FileValidator } from "../validators/FileValidator";
import { Logger } from "../utils/Logger";

export class File implements IFileSystemItem {
    private name: string;
    private size: number;

    constructor(name: string, size: number) {
        if (!FileValidator.validateFileName(name)) {
            throw new Error("Invalid file name");
        }

        if (!FileValidator.validateFileSize(size)) {
            throw new Error("Invalid file size");
        }

        this.name = name;
        this.size = size;
    }

    getName(): string {
        return this.name;
    }

    getSize(): number {
        return this.size;
    }

    display(indentation: string): void {
        Logger.log(`${indentation}File: ${this.name} (${this.size} bytes)`);
    }
}
