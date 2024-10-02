import { LegacySystem } from "./legacy/LegacySystem";
import { NewSystem } from "./new/NewSystem";
import { LegacyDataAdapter } from "./adapters/LegacyDataAdapter";
import { Logger } from "./utils/Logger";

async function runApp() {
  const legacySystem = new LegacySystem();
  const newSystem = new NewSystem();
  const logger = new Logger();

  try {
    logger.logInfo("Starting data conversion process...");
    
    const adapter = new LegacyDataAdapter(legacySystem, newSystem);
    
    // Adapt and retrieve converted data
    const convertedData = adapter.adaptAndProcess();
    
    logger.logInfo("Converted Data: ");
    convertedData.forEach(data => {
      logger.logInfo(`
        ID: ${data.id},
        Full Name: ${data.fullName},
        Date of Birth: ${data.dateOfBirth.toISOString()}
      `);
    });

    logger.logInfo("Data conversion completed successfully.");
  } catch (error) {
    logger.logError("Data conversion failed", error);
  }
}

runApp();
