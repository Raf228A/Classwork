const students = [
{ name: "Михаил", codeSubjects: 19, subjects: ["ЭВМ","Русский язык"] },
{ name: "Богдан", codeSubjects: 16, subjects: ["Информатика","МДК 02.02"] },
{ name: "Слава", codeSubjects: 18, subjects: ["ОФГ","История"] },
{ name: "Владимир", codeSubjects: 17, subjects: ["МДК 01.01","МДК 11.01",] },
{ name: "Владислав", codeSubjects: 16, subjects: ["Черчение","ОПД"] },
{ name: "Добрыня", codeSubjects: 18, subjects: ["Английский язык","ОА и программирование"] },
{ name: "Алёша", codeSubjects: 17, subjects: ["Физ. культура","Технология"] },
{ name: "Илья", codeSubjects: 16, subjects: ["Химия","Биология"] },
{ name: "Святогор", codeSubjects: 18, subjects: ["География","Астрономия"] },
{ name: "Тихон", codeSubjects: 17, subjects: ["Физика","Право"] },
];

function filterStudents(targetArray, targetSubjects) {
      return targetArray.filter(person => person.subjects.includes(targetSubjects));
}

let resultFilter = filterStudents(students, 'ЭВМ');

console.log(resultFilter);