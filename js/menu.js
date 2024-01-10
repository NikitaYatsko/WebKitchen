const button = document.querySelector('.burger_logo');
const modal = document.querySelector('.modal');
button.addEventListener('click', function () {
    modal.classList.toggle('hidden');
});