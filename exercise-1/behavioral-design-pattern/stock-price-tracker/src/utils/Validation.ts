export class Validation {
    static isValidPrice(price: number): boolean {
        return price >= 0;
    }
}
