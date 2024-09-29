import { StockObserver } from "./StockObserver";

export class User extends StockObserver {
    constructor(name: string) {
        super(name);
    }
}
