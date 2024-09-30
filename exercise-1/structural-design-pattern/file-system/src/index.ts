import { File } from "./models/File";
import { Directory } from "./models/Directory";
import { ErrorHandler } from "./utils/ErrorHandler";
import { Logger } from "./utils/Logger";

try {
    const rootDir = new Directory("root");
    const file1 = new File("file1.txt", 500);
    const file2 = new File("file2.txt", 1000);

    const subDir = new Directory("subdir");
    const file3 = new File("file3.txt", 200);

    subDir.add(file3);
    rootDir.add(file1);
    rootDir.add(file2);
    rootDir.add(subDir);

    rootDir.display("");

} catch (error) {
    ErrorHandler.handle(error as Error);
}
