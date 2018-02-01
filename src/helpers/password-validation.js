function validatePassword () {
  let givenPassword = document.getElementById('password');
  if (givenPassword.value.length > 5) {
    document.getElementById('passwordError').style.display="none";
    return true;
  } else {
    document.getElementById('passwordError').style.display="block";
    return false;
  }
}

export default validatePassword;