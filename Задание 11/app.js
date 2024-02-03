class FactorialCalculator {
    constructor(numbers) {
        this.number = numbers;
        this.result = this.calculateFactorial();
    }

    calculateFactorial() {
        if (this.number < 0) {
            return "Факториал не определен для отрицательных чисел.";
        } else if (this.number === 0 || this.number === 1) {
            return 1;
        } else {
            let result = 1;
            for (let i = 2; i <= this.number; i++) {
                result *= i;
            }
            return result;
        }
    }

    print() {
        console.log(`Факториал ${this.number} равен ${this.result}`);
    }
}

const number= 5;
const result = new FactorialCalculator(number);
result.print();