document.addEventListener('DOMContentLoaded', () => {
  const aside = document.querySelector('.container');
  const button = document.querySelector('.toggleButton');
  const links = document.querySelectorAll('.link');

  button.addEventListener('click', () => {
    aside.classList.toggle('active');
    links.forEach((link) => {
      link.classList.toggle('active');
    });
  });
});
