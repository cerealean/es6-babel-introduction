export default class Loan {
    loanAmount = 0;
    interestRate = 0;
    constructor(loanAmount = 0, interestRate = 0){
        this.loanAmount = loanAmount;
        this.interestRate = interestRate;
    }
}
