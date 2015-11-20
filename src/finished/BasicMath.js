import Loan from './Loan';

export default class BasicMath {
    _rawr = "rawr";
    static PI = 3.14;
    total = 0;

    /**
     * @return {number}
     */
    Add(...numbers){
        let total = 0;

        numbers.forEach(number => {
            total = total + number
        });

        return total;
    }

    /**
     * @return {number}
     */
    Subtract(...numbers){
        let total = 0;

        numbers.forEach(number => {
            total = total - number
        });

        return total;
    }

}
