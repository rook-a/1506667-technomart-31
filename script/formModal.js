const formBtn = document.querySelector('.btn--contact');
const formModal = document.querySelector('.form');
const formClose = document.querySelector('.btn--close--form');
const userName = formModal.querySelector('[name=userName]');
const userMail = formModal.querySelector('[name=userMail]');
const userMessage = formModal.querySelector('[name=userMessage]');
const storageName = localStorage.getItem('name');
const storageMail = localStorage.getItem('email');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
}

formBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  formModal.classList.add('form--active');

  // баг в условиях 24-36. очередность name -> mail. если имя пустое фокус на меил, а наоборот бага нет
  if (storageMail) {
    userMail.value = storageMail;
    userMessage.focus();
  } else {
    userMail.focus();
  }

  if (storageName) {
    userName.value = storageName;
    userMail.focus();
  } else {
    userName.focus();
  }

});

formClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  formModal.classList.remove('form--active');
  userName.classList.remove('form__error');
  userMail.classList.remove('form__error');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (formModal.classList.contains('form--active')) {
      evt.preventDefault();
      formModal.classList.remove('form--active');
      userName.classList.remove('form__error');
      userMail.classList.remove('form__error');
    }
  }
});

formModal.addEventListener('submit', function (evt) {

  if (!userName.value || !userMail.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', userName.value);
      localStorage.setItem('email', userMail.value);
    }
  }

  if (!userName.value) {
    userName.classList.remove('form__error');
    userName.offsetWidth = userName.offsetWidth;
    userName.classList.add('form__error');
  }

  if (!userMail.value) {
    userMail.classList.remove('form__error');
    userMail.offsetWidth = userMail.offsetWidth;
    userMail.classList.add('form__error');
  }


});
