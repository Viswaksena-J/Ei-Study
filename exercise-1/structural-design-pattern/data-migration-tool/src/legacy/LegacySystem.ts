export interface LegacyData {
    id: string;
    name: string;
    birthdate: string; // In legacy format e.g., 'DD/MM/YYYY'
  }
  
  export class LegacySystem {
    public getData(): LegacyData[] {
      return [
        { id: "123", name: "Viswak sena", birthdate: "01/01/2004" },
        { id: "124", name: "Hethav sena", birthdate: "15/05/2008" }
      ];
    }
  }
  