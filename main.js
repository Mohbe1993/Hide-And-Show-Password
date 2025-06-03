let eye = document.getElementsByTagName("i")[0];
let pass = document.getElementsByTagName("input")[0];

function show() {
  if (pass.value == "") {
    pass.placeholder = " please enter your password";
  } else if (pass.type == "password") {
    pass.type = "text";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  } else {
    pass.type = "password";
    eye.classList.add("fa-eye-slash");
    eye.classList.remove("fa-eye");
  }
}
