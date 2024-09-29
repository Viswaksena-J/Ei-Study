import { PaymentStrategy } from './PaymentStrategy';
import { Logger, LogLevel } from '../utils/logger';
import { PaymentProcessingError } from '../utils/errors';

export class CreditCardStrategy implements PaymentStrategy {
    constructor(private cardNumber: string, private cvv: string, private dateOfExpiry: string) {}

    pay(amount: number): boolean {
        Logger.log(`Attempting to pay ${amount} using Credit Card`, LogLevel.INFO);
        if (Math.random() < 0.9) {  // 90% success rate
            Logger.log(`Successfully paid ${amount} using Credit Card`, LogLevel.INFO);
            return true;
        } else {
            const errorMessage = this.getRandomErrorMessage();
            Logger.log(`Failed to process payment of ${amount} using Credit Card: ${errorMessage}`, LogLevel.ERROR);
            throw new PaymentProcessingError(errorMessage);
        }
    }

    private getRandomErrorMessage(): string {
        const errors = [
            "Insufficient funds",
            "Card expired",
            "Invalid CVV",
            "Card issuer declined transaction"
        ];
        return errors[Math.floor(Math.random() * errors.length)];
    }
}