function processStudents(students) {
    return students
      .filter(student => student.marks > 60)
      .sort((a, b) => b.marks - a.marks)
      .map(student => student.name);
  }
  
  let students = [
    { name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 }
  ];
  
  let result = processStudents(students);
  console.log(result);
  