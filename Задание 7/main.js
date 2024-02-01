function fullArray(arr) {
    if (arr.some(num => num % 3 === 0)) {
        console.log("Да");
    } else {
        console.log("Нет");
    }
}

const numbers = [5, 9, 10, 15];
fullArray(numbers);