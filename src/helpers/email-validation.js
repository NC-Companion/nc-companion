
function validateEmail() {
  let givenEmail = document.getElementById('email')
  let emailPassing = false;
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2, }))$/;
  if (re.test(givenEmail.value)) {
    document.getElementById('emailError').style.display = "none";
    emailPassing = true;
    return true;
  } else {
    document.getElementById("emailError").style.display = "block";
    emailPassing = false;
    return false;
  }
}

export default validateEmail;