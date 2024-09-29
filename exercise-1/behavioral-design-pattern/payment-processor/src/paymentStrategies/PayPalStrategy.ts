import { PaymentStrategy } from './PaymentStrategy';
import { Logger, LogLevel } from '../utils/logger';
import { PaymentProcessingError } from '../utils/errors';

export class PayPalStrategy implements PaymentStrategy {
    constructor(private email: string) {}

    pay(amount: number): boolean {
        Logger.log(`Attempting to pay ${amount} using PayPal`, LogLevel.INFO);
        if (Math.random() < 0.95) {  // 95% success rate
            if (this.shouldApplyDiscount()) {
                const discountedAmount = amount * 0.95;
                Logger.log(`Applied 5% discount. Paying ${discountedAmount} using PayPal`, LogLevel.INFO);
                return true;
            }
            Logger.log(`Successfully paid ${amount} using PayPal`, LogLevel.INFO);
            return true;
        } else {
            Logger.log(`Failed to process payment of ${amount} using PayPal: Account has insufficient funds`, LogLevel.ERROR);
            throw new PaymentProcessingError('PayPal account has insufficient funds');
        }
    }

    private shouldApplyDiscount(): boolean {
        return Math.random() < 0.99;  // 10% chance of getting a discount
    }
}