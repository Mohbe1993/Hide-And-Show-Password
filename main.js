let eye = document.getElementsByTagName("i")[1];
let pass = document.getElementsByTagName("input")[0];
let sund = document.querySelector(".sund i");

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

sund.onclick = function () {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    sund.classList.remove("fa-sun");
    sund.classList.add("fa-moon");
  } else {
    sund.classList.add("fa-sun");
    sund.classList.remove("fa-moon");
  }
};
