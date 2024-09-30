// new/NewSystem.ts
export interface NewData {
    id: string;
    fullName: string;
    dateOfBirth: Date; // Modern date object format
  }
  
  export class NewSystem {
    public processData(data: NewData[]): void {
      console.log("Processing data in the new format", data);
      // Imagine the data is processed or saved here
    }
  }
  