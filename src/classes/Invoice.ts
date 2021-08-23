import { HasFormatter } from "../interfaces/Hasformatter"; 

//classes
export class Invoice implements HasFormatter {
    // client: string;
    // details: string;
    // amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) { }

    formart() {
        return`${this.client} owes Ksh${this.amount} for ${this.details}`;
    }
}