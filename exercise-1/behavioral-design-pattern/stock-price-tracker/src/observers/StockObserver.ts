import { IObserver } from "../types";
import { Logger } from "../utils/Logger";

export class StockObserver implements IObserver {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    update(stockName: string, price: number): void {
        Logger.log(`${this.name} received update: ${stockName} is now $${price}`);
    }
}
