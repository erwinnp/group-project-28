let formRegister = document.getElementById('form-register');
let fullName = document.getElementById('fullname');
let newEmail = document.getElementById('email-register');
let newPass = document.getElementById('password-register');
let users = JSON.parse(localStorage.getItem('users'));
let warningText = document.querySelector('#warning');
const apiAuth = 'https://643ea9d8c72fda4a0bfd69ad.mockapi.io/api/v1';

formRegister.addEventListener('submit', (e) => {
  e.preventDefault();

  if (fullName.value === '' || newEmail.value === '' || newPass.value === '') {
    warningText.innerHTML = 'isi semua field!';
  } else {
    let allUsers = {
      username: fullName.value,
      email: newEmail.value,
      password: newPass.value,
    };

    const registerUser = async (apiUrl) => {
      await fetch(`${apiUrl}/users`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(allUsers),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          alert('Register berhasil');
          location.replace('./login.html');
        })
        .catch((e) => console.error(e));
    };

    registerUser(apiAuth);
  }
});
