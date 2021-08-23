//classes
export class Payment {
    // client: string;
    // details: string;
    // amount: number;
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    formart() {
        return `${this.recipient} is owed Ksh${this.amount} for ${this.details}`;
    }
}
