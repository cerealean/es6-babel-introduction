import LoanCalculator from './LoanCalculator';
import Loan from './Loan';

const calculator = new LoanCalculator();

const loan1 = new Loan(10000, .1);
const loan2 = new Loan(10, .1);
const loan3 = new Loan(5, .6);
const loan4 = new Loan(20, .25);

calculator.AddLoan(loan1);
calculator.AddLoan(loan2);
calculator.AddLoans(loan3, loan4);

const total = calculator.GetTotal();

const totalMessage = `The total
from the \n calculator was ${total}`;

console.log(totalMessage);