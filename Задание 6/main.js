function minMax(a, b) {
    if (a > b){
        console.log(`Значение a = ${a} больше значения b = ${b}`);
    } else if (b > a) {
        console.log(`Значение b = ${b} больше значения a = ${a}`);
    } else if (a === undefined || b === undefined){
        console.log("Вы не ввели значения");
    } else{
        console.log('Введите корректные знаения');
    }
}

minMax("fdsfsd", 14);