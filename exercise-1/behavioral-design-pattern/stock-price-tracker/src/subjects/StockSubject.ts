import { IObserver, ISubject } from "../types";
import { Logger } from "../utils/Logger";
import { Validation } from "../utils/Validation";
import { ErrorHandler } from "../utils/ErrorHandler";
import { StockObserver } from "../observers/StockObserver";

export class StockSubject implements ISubject {
    private observers: StockObserver[] = [];
    private stockName: string;
    private stockPrice: number;

    constructor(stockName: string, initialPrice: number) {
        if (!Validation.isValidPrice(initialPrice)) {
            throw new Error("Invalid initial stock price");
        }

        this.stockName = stockName;
        this.stockPrice = initialPrice;
    }

    registerObserver(observer: StockObserver): void {
        this.observers.push(observer);
        Logger.log(`${observer.getName()} subscribed to ${this.stockName}`);
    }

    removeObserver(observer: StockObserver): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            const removedObserver = this.observers.splice(index, 1)[0];
            Logger.log(`${removedObserver.getName()} unsubscribed by ${this.stockName}`);
        }
    }

    notifyObservers(): void {
        this.observers.forEach(observer => {
            try {
                observer.update(this.stockName, this.stockPrice);
            } catch (error) {
                ErrorHandler.handle(error as Error);
            }
        });
    }

    setPrice(newPrice: number): void {
        if (!Validation.isValidPrice(newPrice)) {
            ErrorHandler.handle(new Error("Invalid stock price update attempt"));
            return;
        }

        if (this.stockPrice !== newPrice) {
            this.stockPrice = newPrice;
            Logger.log(`Stock ${this.stockName} updated to $${this.stockPrice}`);
            this.notifyObservers();
        }
    }
}
