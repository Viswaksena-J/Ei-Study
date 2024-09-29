import { PaymentStrategy } from './paymentStrategies/PaymentStrategy';
import { Logger, LogLevel } from './utils/logger';
import { PaymentProcessingError } from './utils/errors';

export class PaymentProcessor {
    private strategy: PaymentStrategy | null = null;

    setStrategy(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    processPayment(amount: number): boolean {
        if (!this.strategy) {
            Logger.log('Payment strategy not set', LogLevel.ERROR);
            throw new PaymentProcessingError('Payment strategy not set');
        }
        return this.strategy.pay(amount);
    }
}
