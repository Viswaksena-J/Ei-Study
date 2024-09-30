import { IFileSystemItem } from "../interfaces/IFileSystemItem";
import { Logger } from "../utils/Logger";

export class Directory implements IFileSystemItem {
    private name: string;
    private items: IFileSystemItem[] = [];

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    getSize(): number {
        return this.items.reduce((totalSize, item) => totalSize + item.getSize(), 0);
    }

    add(item: IFileSystemItem): void {
        this.items.push(item);
    }

    remove(item: IFileSystemItem): void {
        this.items = this.items.filter(i => i !== item);
    }

    display(indentation: string = ""): void {
        Logger.log(`${indentation}Directory: ${this.name}`);
        this.items.forEach(item => item.display(indentation + "  "));
    }
}
