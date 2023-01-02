function addToCart() {
  alert("Item Aded To Cart");
  window.location.href = "cart.html";
}
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function login() {
  var mail = document.getElementById("mail").value;
  var pass = document.getElementById("pass").value;

  if (validateEmail(mail) && pass != "") {
    window.location.href = "index-logedin.html";
  } else {
    alert("mail and password requierd ");
  }
}

function register() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var phone = document.getElementById("phone").value;
  var mail = document.getElementById("mail").value;
  var city = document.getElementById("city").value;
  var address = document.getElementById("address").value;
  var pass = document.getElementById("pass").value;
  var file = document.getElementById("file").value;
  var Parent = document.getElementById("Parent").value;
  var checkPass = document.getElementById("checkPass");

  if (
    fname != "" &&
    lname != "" &&
    phone != "" &&
    city != "" &&
    address != "" &&
    file != "" &&
    validateEmail(mail) &&
    pass != ""
  ) {
    if (checkPass.checked) {
      if (Parent != "") {
        window.location.href = "login.html";
      } else {
        alert("you checked the parent pass, please enter value");
      }
    } else {
      window.location.href = "login.html";
    }
  } else {
    alert("all attriputes is requierd ");
  }
}
