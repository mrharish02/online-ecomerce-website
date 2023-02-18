var users = [
  {
    uname: "admin",
    uemail: "admin@gmail.com",
    upassword: "12345678",
    products: "",
  },
  {
    uname: "harish",
    uemail: "harish@gmail.com",
    upassword: "Harish@123",
    products: "",
  },
];

function auth() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  const tempuser = users.find((user) => user.uemail === email);
  if (tempuser === undefined) {
    var tempemail = "__";
    var temppassword = "__";
  } else {
    var tempemail = tempuser.uemail;
    var temppassword = tempuser.upassword;
  }
  console.log("logged in successfully!!!");
  if (email === tempemail && temppassword === password) {
    window.location.assign("html/home.html");
    alert("Logged in successfully");
  } else {
    alert("Invalid credentials!!!");
    return;
  }
  localStorage.clear;
}

function signup() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  console.log({
    uname: name,
    uemail: email,
    upassword: password,
  });
  users.push({
    uname: name,
    uemail: email,
    upassword: password,
  });
  window.location.assign("../html/home.html");
  alert("Signup successfull!!!");
}
