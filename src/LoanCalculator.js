import $ from '../node_modules/jquery/dist/jquery.min'; //To prove a point
import BasicMath from './BasicMath';

export default class LoanCalculator {

    /**
     * @type {Loan[]}
     * @private
     */
    _Loans = [];

    /**
     * @param loan {Loan}
     */
    AddLoan(loan){
        this._Loans.push(loan);
    }

    /**
     * @param loans
     */
    AddLoans(...loans){
        loans.forEach(loan => this.AddLoan(loan));
    }

    /**
     * @return {number}
     */
    GetTotal(){
        let total = this._Loans.map(loan => loan.loanAmount + (loan.loanAmount * loan.interestRate));

        return new BasicMath().Add(...total);
    }
}
