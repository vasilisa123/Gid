let popup = document.querySelector('.header__burger');
let popupActive = document.querySelector('.popup');
let header = document.querySelector('.header__container');
let main = document.querySelector('main');
let close = document.querySelector('.header__burger-close');

popup.addEventListener('click', function(){
    popup.classList.add('active');
    popupActive.classList.toggle('active');
    header.classList.toggle('active');
    main.classList.toggle('active');
});


close.addEventListener('click', function(){
    popup.classList.remove('active');
    popupActive.classList.toggle('active');
    header.classList.toggle('active');
    main.classList.toggle('active');
});

//popup phone

let phone = document.querySelector('.header__phone');
let popupPhone = document.querySelector('.popup__phone');
let closePhone = document.querySelector('.popup__phone-item')


phone.addEventListener('click', function(){
    phone.classList.toggle('active');
    popupPhone.classList.toggle('active');
});

closePhone.addEventListener('click', function(){
    phone.classList.remove('active');
    popupPhone.classList.toggle('active');
});