const btnBuy = document.querySelectorAll('.card__buy');
const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.btn--close--popup');

for (let i = 0; i < btnBuy.length; i++) {
    btnBuy[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('popup--active');
  });
}

popupClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup--active');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (popup.classList.contains('popup--active')) {
      evt.preventDefault();
      popup.classList.remove('popup--active');
    }
  }
});
