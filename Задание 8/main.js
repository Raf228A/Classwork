 const showStudent = (student) => {
   console.log(`Имя: ${student.name}`);
    console.log(`Возраст: ${student.age}`);
    console.log(`Хобби: ${student.hobbies}`);
    for(let contact in student.contacts) {
        console.log(`Контакты: ${student.contacts[contact]}`);
    }
}

const rafDim = {
    name: "Gomunkul",
    age: 18,
    hobbies: ["Играть","Спать","Кушать"],
    contacts: {
        phone: ["+79375355564", "+79377374827"],
        email: ["rafaelavetisan9@gmail.com", "petrenkodimasic@gmail.com"],
        social: ["@dimchikcc", "@MrProper05(tg)"]
        
    }
    
        
}

showStudent(rafDim);
