export class Logger {
    public logInfo(message: string): void {
      console.info(`[INFO]: ${message}`);
    }
  
    public logError(message: string, error: any): void {
      console.error(`[ERROR]: ${message}`, error);
    }
  
    public logWarning(message: string): void {
      console.warn(`[WARN]: ${message}`);
    }
  }
  