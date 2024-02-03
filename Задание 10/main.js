class DivisibleByThreeChecker {
    numbersArray;
    resultArray;
    constructor(numbers) {
        this.numbersArray = numbers;
    }

    hasNumberDivisibleByThree() {
        return this.numbersArray.some(num => num % 3 === 0);
    }

    print() {
        if (this.hasNumberDivisibleByThree()) {
            console.log("Да");
        } else {
            console.log("Нет");
        }
    }
}

const numbersArray = [2, 5, 7, 11, 14];
const resultArray = new DivisibleByThreeChecker(numbersArray);
resultArray.print();