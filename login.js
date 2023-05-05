let formLogin = document.getElementById("form-login");
let users = JSON.parse(localStorage.getItem("users"));

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email");
  let pass = document.getElementById("password");

  let userLogin = null;
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].emailUser === email.value &&
      users[i].passwordUser === pass.value
    ) {
      userLogin = users[i];
    }
  }

  console.log(userLogin);

  if (userLogin !== null) {
    alert("Login Berhasil");
    location.replace("index.html");
  } else {
    alert("Login Gagal");
  }
});
