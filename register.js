let formRegister = document.getElementById("form-register");
let fullName = document.getElementById("fullname");
let newEmail = document.getElementById("email-register");
let newPass = document.getElementById("password-register");
let users = JSON.parse(localStorage.getItem("users"));

formRegister.addEventListener("submit", (e) => {
  e.preventDefault();

  if (fullName.value === "" || newEmail === "" || newPass === "") {
    alert("isi semua field");
    return false;
  }

  let allUsers = {
    fullName: fullName.value,
    emailUser: newEmail.value,
    passwordUser: newPass.value,
  };

  let userRegister = [];

  if (localStorage.getItem("users") === null) {
    userRegister.push(allUsers);
    localStorage.setItem("users", JSON.stringify(userRegister));
  } else {
    userRegister = JSON.parse(localStorage.getItem("users"));
    userRegister.push(allUsers);
    localStorage.setItem("users", JSON.stringify(userRegister));
  }

  console.log(userRegister);

  alert("Register berhasil");
});
