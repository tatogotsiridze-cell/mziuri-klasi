
let students = [
  {name: "nika",score:80},
  {name: "luka",score:55},
  {name: "ana",score:92},
  
];
 
for (let i = 0; i < students.length; i++) 
  if (students[i].score >= 60) {
    console.log(students[i].name + " passed ");
  } else {
    console.log(students[i].name + " failed ");
  };
