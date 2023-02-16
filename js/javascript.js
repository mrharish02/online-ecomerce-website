function auth() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (email == "admin" && password == "12345678") {
    window.location.assign("html/home.html");
    alert("Logged in successfully");
  } else {
    alert("Invalid credentials!!!");
    return;
  }
}
