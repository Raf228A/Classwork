class NegativeNumberChecker{
   constructor(numbers) {
    this.numbers = numbers;
   }
   hasNegativeNumber() {
    return this.numbers.some(num => num < 0);
   }

   checkAndOutput() {
      if(this.hasNegativeNumber()) {
         console.log("Да");
      } else {
         console.log("Нет")
      }
   }
}

let numbersArray = [1, 2, -3, 4, 5];
let negativeChecker = new NegativeNumberChecker(numbersArray);
negativeChecker.checkAndOutput();