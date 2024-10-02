import { StockSubject } from "./subjects/StockSubject";
import { User } from "./observers/User";

function runStockMarketApp(): void {
    const googleStock = new StockSubject("Google", 1500);

    const user1 = new User("Somu");
    const user2 = new User("Ramu");

    googleStock.registerObserver(user1);
    googleStock.registerObserver(user2);

    googleStock.setPrice(1550);
    googleStock.setPrice(1600);

    googleStock.removeObserver(user1);
    googleStock.setPrice(1625);
}

try {
    runStockMarketApp();
} catch (error) {
    console.error("Application error: ", error);
}