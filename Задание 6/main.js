function main (){
    console.log("Привет я функция");
}

function sum(a, b){
    let result = a + b;
    console.log(result)
}
function student (firstName, lastName, group) {
    alert(`Привет, ${firstName} ${lastName}. Я знаю, что ты из группы - ${group}`);
}
let fName = prompt("Введите имя");
let lName = prompt("Введите фамилию");
let sGroup = prompt("Введите название группы");
student(fName, lName, sGroup);