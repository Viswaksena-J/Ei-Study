export function isValidAmount(amount: string): boolean {
    return !isNaN(parseFloat(amount)) && parseFloat(amount) > 0;
}

export function isValidCardNumber(cardNumber: string): boolean {
    return /^\d{16}$/.test(cardNumber);
}

export function isValidCVV(cvv: string): boolean {
    return /^\d{3,4}$/.test(cvv);
}

export function isValidExpiryDate(expiry: string): boolean {
    const [month, year] = expiry.split('/');
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    return /^\d{2}\/\d{2}$/.test(expiry) &&
           parseInt(month) >= 1 && parseInt(month) <= 12 &&
           (parseInt(year) > currentYear || (parseInt(year) === currentYear && parseInt(month) >= currentMonth));
}

export function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
