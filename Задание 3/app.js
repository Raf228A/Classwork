const colleges = [
    {
        name: "Иван",
        lastName: "Иванов",
        age: 18,
        hobby: ["ПК", "Кодинг", "Сборка ПК"],
        responsibilities: {
            first: "Слушать маму!!!",
            second: "Хорошо учиться",
            third: "Развиваться, соединяя учебы с работой"
        } 
    },
    {
        name: "Сигизмунд",
        lastName: "Хохлятский",
        age: 532,
        specialisation: ["Алгебра","Геометрия","Информатика"],
        additionalSpecialisation: {
            first: "Язык программирования Паскаль",
            second: "Язык программирования C#",
            third: "База языка программирования JS"
        }
    }
];    

console.log(colleges[0]["name"], colleges[0]["hobby"])
console.log(colleges[1]["name"], colleges[1]["specialisation"])