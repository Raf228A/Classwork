class FilterArrays {
    numbersArray;
    resultArray;

    constructor(numbers) {
        this.numbersArray = numbers;
    }

    filter() {
        return this.numbersArray.filter(num => num % 3 === 0 || num % 5 === 0 || num % 7 === 0);
    }

    print() {
        this.resultArray = this.filter();
        console.log(this.resultArray)
    }
    
    
}
const numbersArray =[1, 5, 15, 9, 2];
const resultArray = new FilterArrays(numbersArray);
resultArray.print();

