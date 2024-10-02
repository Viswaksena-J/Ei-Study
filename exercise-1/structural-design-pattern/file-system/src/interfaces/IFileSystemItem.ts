export interface IFileSystemItem {
    getName(): string;
    getSize(): number;
    display(indentation: string): void;
}
