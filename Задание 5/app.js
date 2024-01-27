const studentsArray = [
  {name: "Tom", age: 25, favoriteSubject: "IT", course: 2, studentsID: 43223, department: "Information technology", formOfEducation: "full-time" },  
  {name: "Bob", age: 23, favoriteSubject: "Math", course: 1, studentsID: 84431, department: "Printing", formOfEducation: "correspondence" }, 
  {name: "Stan", age: 36, favoriteSubject: "Information technology", course: 4, studentsID: 23455, department: "Power industry", formOfEducation: "full-time" },
  {name: "Robert", age: 52, favoriteSubject: "English language", course: 3, studentsID: 30349, department: "Fire safety", formOfEducation: "correspondence"  } 
];

for(let student of studentsArray) {
    for(let key in student) {
        console.log(key + ": " + student[key]);
    }
    console.log("=============")
}
