function filterNumbers(RafArm) {
    return RafArm.filter(num => num % 3 === 0 || num % 5 === 0 || num % 7 === 0);
}

const inputArray = [11, 21, 30, 37, 42, 45, 70];
const filteredArray = filterNumbers(inputArray);
console.log(filteredArray);