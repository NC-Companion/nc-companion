function validatePassword () {
  let passwordPassing = false;
  let givenPassword = document.getElementById('password');
  if (givenPassword.value.length > 5) {
    document.getElementById('passwordError').style.display="none";
    passwordPassing = true;
    return true;
  } else {
    document.getElementById('passwordError').style.display="block";
    passwordPassing = false;
    return false;
  }
}

export default validatePassword;