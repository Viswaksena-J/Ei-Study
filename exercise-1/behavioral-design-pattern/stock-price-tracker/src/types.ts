export interface IObserver {
    update(stockName: string, price: number): void;
}

export interface ISubject {
    registerObserver(observer: IObserver): void;
    removeObserver(observer: IObserver): void;
    notifyObservers(): void;
}
