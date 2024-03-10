$('.cons-button').on('click', function() {
  $('.block1').toggleClass('reverse');
  $('.block2').toggleClass('reverse');
});

function toggleMenu() {
  var menu = document.querySelector('.burger-menu');
  var lines = document.querySelectorAll('.line');
  var menu = document.querySelector('.burger-menu');
  var menu = document.querySelector('.burger-menu');
  menu.classList.toggle('active');

  if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
      lines[0].classList.add('open');
      lines[1].classList.add('open');
      lines[2].classList.add('open');
  } else {
      menu.style.display = 'none';
      lines[0].classList.remove('open');
      lines[1].classList.remove('open');
      lines[2].classList.remove('open');
  }
}
function login() {
  var successMessage = document.getElementById('login-form');
  successMessage.style.display = 'block';
  setTimeout(function() {
    successMessage.style.display = 'none';
}, 3000);
  }
document.getElementById('loginButton').addEventListener('click', login);

