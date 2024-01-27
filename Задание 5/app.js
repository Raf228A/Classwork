// const peoples = ["Tom", "Vova", "Sam","Bob", "Nat", "Ivan", "Stas"];
// for(let i = 0; i < peoples.length; i++) {
// let result = peoples[i];
// console.log(result);
// }

// Двухмерный массив
const peoples = [["Tom", "hady", 39, "ул.пушкина"], ["Bill", "Gaits", 19, "ул.алега"], ["Djon", "Ten", 31, "ул.валеры"],["Tom", "Strengh", 32, "ул.ушкина"],["Tom", "Rhady", 34, "ул.кина"],["Tom", "Dady", 41, "ул.ушкина"],];
for (let i = 0; i < peoples.length; i++) {
    for (let j = 0; j < peoples[i].length; j++) {
        let result = peoples[i][j];
        console.log(result);
    }
    console.log("==========");
}