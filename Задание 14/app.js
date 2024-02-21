const animal = {
    species: "Тигр",
    age: 7,
    color: "Оранжевый с черными полосами",
    habitat: "Лес",
    diet: "Хищник"
    };
    
    function printDiet() {
    if (animal.diet === "Хищник") {
    return "Животное является хищником.";
    } else if (animal.diet === "Травоядное") {
    return "Животное является травоядным.";
    } else if (animal.diet === "Всеядное") {
    return "Животное является всеядным."
    } else {
    return "Тип питания не определен."
    }
    }
    
    function printAnimalInfo() {
    let animalInfo = "";
    for (let key in animal) {
    animalInfo += `${key}: ${animal[key]}\n`;
    }
    animalInfo += `${printDiet()}`;
    console.log(animalInfo);
    }
    
    printAnimalInfo();