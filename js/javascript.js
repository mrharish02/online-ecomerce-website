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
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  const tempuser = users.find((user) => user.uname === username);
  if (tempuser === undefined) {
    var tempusername = "__";
    var temppassword = "__";
  } else {
    var tempusername = tempuser.uname;
    var temppassword = tempuser.upassword;
  }
  console.log("logged in successfully!!!");
  if (username === tempusername && temppassword === password) {
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
