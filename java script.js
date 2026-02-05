const username = ["ilo", "saba", "daviti"];
const password = ["ilo1", "saba2", "daviti3"];

let user = prompt("enter your username");
let pass = prompt("enter your password");

if (user == username[0] && pass == password[0]) {
  console.log("welcome ilo");
} else if (user == username[1] && pass == password[1]) {
  console.log("welcome saba");
} else if (user == username[2] && pass == password[2]) {
  console.log("welcome daviti");
} else {
  console.log   ("invalid username or password");
}
