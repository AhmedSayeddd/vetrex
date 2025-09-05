// Toggle between Login and Register
const showLogin = document.getElementById('show-login');
const showRegister = document.getElementById('show-register');
const loginBox = document.getElementById('login-box');
const registerBox = document.getElementById('register-box');

showLogin.addEventListener('click', (e) => {
  e.preventDefault();
  registerBox.style.display = 'none';
  loginBox.style.display = 'block';
});

showRegister.addEventListener('click', (e) => {
  e.preventDefault();
  loginBox.style.display = 'none';
  registerBox.style.display = 'block';
});
