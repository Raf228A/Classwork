class MaxCalculator{
   constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
   }
   findMax() {
    return Math.max(this.num1, this.num2);
   }
}

let calc = new MaxCalculator(5, 8);
let result = calc.findMax();
console.log(result);