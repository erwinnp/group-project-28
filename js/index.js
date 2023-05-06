let auth = localStorage.getItem('users');
let button = document.querySelector('.menu__button-a');

if (auth !== null) {
  button.innerHTML = 'Logout';
  button.href = 'page/login.html';
  button.classList.add('logout__button');
  button.addEventListener('click', () => {
    button.classList.remove('logout__btn');
    localStorage.removeItem('users');
    location.replace('./page/login.html');
  });
} else {
  button.innerHTML = 'Login';
  button.href = 'page/login.html';
}
