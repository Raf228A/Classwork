class ArithmeticProgressionSumCalculator {
    constructor(firstTerm, difference, numberOfTerms) {
        this.firstTerm = firstTerm;
        this.difference = difference;
        this.numberOfTerms = numberOfTerms;
        this.sum = this.calculateSum();
    }

    calculateSum() {
        if (this.numberOfTerms <= 0){
            return "Кол-во членов должно быть положительным"
        }

        return (this.numberOfTerms / 2) * (2 * this.firstTerm + (this.numberOfTerms - 1) * this.difference);
    }

    print() {
        console.log(`Сумма арифметической прогрессии: ${this.sum}`);
    }
}

const firstTerm = 3;
const difference = 2;
const numberOfTerms = 4;
const progressionSumCalculator = new ArithmeticProgressionSumCalculator(firstTerm, difference, numberOfTerms);
progressionSumCalculator.print();