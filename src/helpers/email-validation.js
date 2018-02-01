
function validateEmail() {
  let givenEmail = document.getElementById('email')
  const re = /\S+@\S+\.\S+/
  if (re.test(givenEmail.value)) {
    document.getElementById('emailError').style.display = "none";
    return true;
  } else {
    document.getElementById("emailError").style.display = "block";
    return false;
  }
}

export default validateEmail;