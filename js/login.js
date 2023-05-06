let formLogin = document.getElementById('form-login');
let users = JSON.parse(localStorage.getItem('users'));
let warningText = document.querySelector('#warning');
const apiAuth = 'https://643ea9d8c72fda4a0bfd69ad.mockapi.io/api/v1';

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();

  let email = document.getElementById('email');
  let pass = document.getElementById('password');

  if (email.value === '' || pass.value === '') {
    warningText.innerHTML = 'Isi semua field!';
  } else {
    const getUser = async (apiUrl) => {
      await fetch(`${apiUrl}/users`, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          userAuth(result);
        });
    };

    getUser(apiAuth);

    const userAuth = (data) => {
      let userLogin = null;
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].email === email.value && data[i].password === pass.value) {
          userLogin = data[i];
        }
      }
      if (userLogin !== null) {
        alert('Login Berhasil');
        localStorage.setItem('users', JSON.stringify(userLogin));
        location.replace('../index.html');
      } else {
        warningText.innerHTML = 'Login Gagal';
      }
    };
  }
});
