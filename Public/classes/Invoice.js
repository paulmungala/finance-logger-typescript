//classes
export class Invoice {
    // client: string;
    // details: string;
    // amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    formart() {
        return `${this.client} owes Ksh${this.amount} for ${this.details}`;
    }
}
