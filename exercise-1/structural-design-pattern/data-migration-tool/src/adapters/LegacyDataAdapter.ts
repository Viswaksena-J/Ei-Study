import { LegacyData, LegacySystem } from "../legacy/LegacySystem";
import { NewData, NewSystem } from "../new/NewSystem";
import { Logger } from "../utils/Logger";

export class LegacyDataAdapter {
  private legacySystem: LegacySystem;
  private newSystem: NewSystem;
  private logger: Logger;

  constructor(legacySystem: LegacySystem, newSystem: NewSystem) {
    this.legacySystem = legacySystem;
    this.newSystem = newSystem;
    this.logger = new Logger();
  }

  public adaptAndProcess(): NewData[] {
    try {
      const legacyData: LegacyData[] = this.legacySystem.getData();
      const newData: NewData[] = legacyData.map(data => this.convertToNewData(data));
      
      this.logger.logInfo("Converted data successfully.");
      
      this.newSystem.processData(newData);

      return newData;
    } catch (error) {
      this.logger.logError("Error in data conversion", error);
      throw new Error("Legacy data adaptation failed");
    }
  }

  private convertToNewData(legacyData: LegacyData): NewData {
    const dateParts = legacyData.birthdate.split("/").map(Number);
    const dateOfBirth = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

    if (isNaN(dateOfBirth.getTime())) {
      throw new Error(`Invalid date format in legacy data for ID: ${legacyData.id}`);
    }

    return {
      id: legacyData.id,
      fullName: legacyData.name,
      dateOfBirth: dateOfBirth,
    };
  }
}
