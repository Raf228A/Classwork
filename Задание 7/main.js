function sumArray(GP) {
    return GP.reduce((sum, num) => sum + num, 0);
}

const numbers = [5, 10, 15, 20];
const totalSum = sumArray(numbers);
console.log(`Сумма элементов массива: ${totalSum}`);