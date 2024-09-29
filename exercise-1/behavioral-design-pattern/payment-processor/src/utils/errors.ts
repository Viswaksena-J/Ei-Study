export class PaymentProcessingError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'PaymentProcessingError';
    }
}

export class InvalidInputError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidInputError';
    }
}