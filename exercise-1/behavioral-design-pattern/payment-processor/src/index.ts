import { PaymentProcessor } from './PaymentProcessor';
import { CreditCardStrategy } from './paymentStrategies/CreditCardStrategy';
import { PayPalStrategy } from './paymentStrategies/PayPalStrategy';
import { MENU_OPTIONS, MESSAGES } from './utils/constants';
import { isValidAmount, isValidCardNumber, isValidCVV, isValidExpiryDate, isValidEmail } from './utils/validators';
import { Logger, LogLevel } from './utils/logger';
import { InvalidInputError, PaymentProcessingError } from './utils/errors';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const paymentProcessor = new PaymentProcessor();

function showMenu() {
    console.log(MESSAGES.WELCOME);
    console.log('1. Pay with Credit Card');
    console.log('2. Pay with PayPal');
    console.log('3. Exit');
    rl.question(MESSAGES.CHOOSE_OPTION, handleUserInput);
}

function handleUserInput(choice: string) {
    switch (choice) {
        case MENU_OPTIONS.CREDIT_CARD:
            processCreditCardPayment();
            break;
        case MENU_OPTIONS.PAYPAL:
            processPayPalPayment();
            break;
        case MENU_OPTIONS.EXIT:
            Logger.log(MESSAGES.GOODBYE);
            rl.close();
            return;
        default:
            Logger.log(MESSAGES.INVALID_OPTION, LogLevel.WARNING);
            showMenu();
            return;
    }
}

function processCreditCardPayment() {
    rl.question(MESSAGES.ENTER_AMOUNT, (amount) => {
        try {
            if (!isValidAmount(amount)) {
                throw new InvalidInputError('Invalid amount entered');
            }
            rl.question(MESSAGES.ENTER_CARD_NUMBER, (cardNumber) => {
                try {
                    if (!isValidCardNumber(cardNumber)) {
                        throw new InvalidInputError('Invalid card number entered');
                    }
                    rl.question(MESSAGES.ENTER_CVV, (cvv) => {
                        try {
                            if (!isValidCVV(cvv)) {
                                throw new InvalidInputError('Invalid CVV entered');
                            }
                            rl.question(MESSAGES.ENTER_EXPIRY, (expiry) => {
                                try {
                                    if (!isValidExpiryDate(expiry)) {
                                        throw new InvalidInputError('Invalid expiry date entered');
                                    }
                                    paymentProcessor.setStrategy(new CreditCardStrategy(cardNumber, cvv, expiry));
                                    processPayment(parseFloat(amount));
                                } catch (error) {
                                    handleError(error);
                                }
                            });
                        } catch (error) {
                            handleError(error);
                        }
                    });
                } catch (error) {
                    handleError(error);
                }
            });
        } catch (error) {
            handleError(error);
        }
    });
}

function processPayPalPayment() {
    rl.question(MESSAGES.ENTER_AMOUNT, (amount) => {
        try {
            if (!isValidAmount(amount)) {
                throw new InvalidInputError('Invalid amount entered');
            }
            rl.question(MESSAGES.ENTER_PAYPAL_EMAIL, (email) => {
                try {
                    if (!isValidEmail(email)) {
                        throw new InvalidInputError('Invalid email entered');
                    }
                    paymentProcessor.setStrategy(new PayPalStrategy(email));
                    processPayment(parseFloat(amount));
                } catch (error) {
                    handleError(error);
                }
            });
        } catch (error) {
            handleError(error);
        }
    });
}

function processPayment(amount: number) {
    try {
        const result = paymentProcessor.processPayment(amount);
        if (result) {
            Logger.log(MESSAGES.PAYMENT_SUCCESS);
        } else {
            Logger.log(MESSAGES.PAYMENT_FAILURE, LogLevel.WARNING);
        }
    } catch (error) {
        handleError(error);
    } finally {
        showMenu();
    }
}

function handleError(error: unknown) {
    if (error instanceof InvalidInputError) {
        Logger.log(error.message, LogLevel.WARNING);
    } else if (error instanceof PaymentProcessingError) {
        Logger.log(`Payment processing error: ${error.message}`, LogLevel.ERROR);
    } else if (error instanceof Error) {
        Logger.log(`An unexpected error occurred: ${error.message}`, LogLevel.ERROR);
    } else {
        Logger.log('An unknown error occurred', LogLevel.ERROR);
    }
    showMenu();
}

showMenu();