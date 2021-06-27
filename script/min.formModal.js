const formBtn=document.querySelector(".btn--contact"),formModal=document.querySelector(".form"),formClose=document.querySelector(".btn--close--form"),userName=formModal.querySelector("[name=userName]"),userMail=formModal.querySelector("[name=userMail]"),userMessage=formModal.querySelector("[name=userMessage]"),storageName=localStorage.getItem("name"),storageMail=localStorage.getItem("email");let isStorageSupport=!0,storage="";try{storage=localStorage.getItem("name")}catch(e){isStorageSupport=!1}formBtn.addEventListener("click",function(e){e.preventDefault(),formModal.classList.add("form--active"),storageMail?(userMail.value=storageMail,userMessage.focus()):userMail.focus(),storageName?(userName.value=storageName,userMail.focus()):userName.focus()}),formClose.addEventListener("click",function(e){e.preventDefault(),formModal.classList.remove("form--active"),userName.classList.remove("form__error"),userMail.classList.remove("form__error")}),window.addEventListener("keydown",function(e){"Esc"!==e.key&&"Escape"!==e.key||formModal.classList.contains("form--active")&&(e.preventDefault(),formModal.classList.remove("form--active"),userName.classList.remove("form__error"),userMail.classList.remove("form__error"))}),formModal.addEventListener("submit",function(e){userName.value&&userMail.value?isStorageSupport&&(localStorage.setItem("name",userName.value),localStorage.setItem("email",userMail.value)):e.preventDefault(),userName.value||(userName.classList.remove("form__error"),userName.offsetWidth=userName.offsetWidth,userName.classList.add("form__error")),userMail.value||(userMail.classList.remove("form__error"),userMail.offsetWidth=userMail.offsetWidth,userMail.classList.add("form__error"))});