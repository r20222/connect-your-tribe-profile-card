// probeersel met on click

const clicks = document.querySelectorAll('.click');

clicks.forEach(function(klik) {
    klik.addEventListener('click', ()=> {
    klik.classList.toggle('flip-around');
  });
});