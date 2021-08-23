// interface Isperson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const me: Isperson = {
//     name: 'paul',
//     age: 30,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log('I spent', amount);
//         return amount;
//     }
// };

// console.log(me)
import { Invoice } from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/Hasformatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('Yoshi', 'web work', 250);
// docTwo = new Invoice('Mario', 'plumbing work', 200);

// let docs: HasFormatter[ ] = [ ];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);
// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('serio', 'work on the mario website', 450);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);


// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.formart());
// });

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom= document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end');

});