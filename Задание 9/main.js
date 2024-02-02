class MassivSumCalculat {
    constructor(numbers) {
        this.numbers = numbers;
    }
    calculateSum() {
        return this.numbers.reduce((sum, num) => sum + num, 0);
    }
}

let numbersMassiv = [1, 2, 3, 4, 5];
let sumCalcut = new MassivSumCalculat(numbersMassiv);
let sumResult = sumCalcut.calculateSum();
console.log(sumResult);