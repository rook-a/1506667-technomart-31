const mapBtn = document.querySelector('.contact__map');
const mapModal = document.querySelector('.modal__map');
const mapClose = document.querySelector('.btn--close');

mapBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapModal.classList.add('modal__map--active');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapModal.classList.remove('modal__map--active');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (mapModal.classList.contains('modal__map--active')) {
      evt.preventDefault();
      mapModal.classList.remove('modal__map--active');
    }
  }
});
