// Write your code here
// class Classroom {
//   constructor(hasTeachingAssistant, classList) {
//     this.hasTeachingAssistant = hasTeachingAssistant;
//     this.classList = classList;
//   }
// }

// function getStudents({ hasTeachingAssistant, classList }) {
//   if (hasTeachingAssistant) {
//     let [teacher, assistant, ...students] = classList;
//     return students;
//   } else {
//     let [teacher, ...students] = classList;
//     return students
//   }
// }

// const class1 = new Classroom(true, ["Peter", "Paul", "Mary", "Sue", "Storm", "Razor", "Blade", "Runner"])
// console.log(getStudents(class1));



function getStudents(classroom) {
  let { hasTeachingAssistant, classList } = classroom;
  let teacher, assistant, students;

  if (hasTeachingAssistant) {
    [teacher, assistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

console.log(getStudents({
  hasTeachingAssistant: true,
  classList: ["Peter", "Paul", "Mary", "Sue", "Storm", "Razor", "Blade", "Runner"]
}))