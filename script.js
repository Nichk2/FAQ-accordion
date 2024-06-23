const button = document.querySelectorAll('.container');

button.forEach(item => {
  const acc = item.querySelector('.text');
  const plus = item.querySelector('.plus');
  const minus = item.querySelector('.minus');

  item.addEventListener('click', () => {
    acc.classList.toggle('active');
    if (acc.classList.contains('active')) {
      plus.style.display = 'none';
      minus.style.display = 'block';
    } else {
      plus.style.display = 'block';
      minus.style.display = 'none';
    }
  });
});