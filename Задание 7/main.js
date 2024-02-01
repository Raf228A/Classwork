function negativeArray(arr) {
    if (arr.some(num => num < 0)) {
        console.log("Да");
    } else {
        console.log("Нет");
    }
}

const numbers = [5, -8, 10, 15];
negativeArray(numbers);