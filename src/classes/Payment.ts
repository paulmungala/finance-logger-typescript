import { HasFormatter } from "../interfaces/Hasformatter"; 

//classes
export class Payment implements HasFormatter {
    // client: string;
    // details: string;
    // amount: number;

    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
    ) { }

    formart() {
        return`${this.recipient} is owed Ksh${this.amount} for ${this.details}`;
    }
}