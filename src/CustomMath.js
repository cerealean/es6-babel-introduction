class CustomMath {

    /**
     * @return {number}
     */
    static get PI() {
        return 3.14;
    }

    get test(){
        return 2;
    }

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
