function execute(event) {
  event.preventDefault();
  const form = document.querySelector("form").elements;
   fetch(form.username.value,form.password.value,form.age.value,form.mail.value,form.male.value,form.female.value,);
  
}
function sendData(username, password, age, mail, mail,female) {
  console.log(
    username + " " + password + " " + age + " " + mail + " " + female
  );
}
