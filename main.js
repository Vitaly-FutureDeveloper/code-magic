var loginLink = document.querySelector('.login-link'),
    closeModal = document.querySelectorAll('.modal-close'),
    glassModals = document.querySelector('.glass-for-modals'),
        modalLogin = document.querySelector('.modal-login'),
        inputLogin = document.querySelector('[name=login]'),
        inputPassword = document.querySelector('[name=password]'),
        formLogin = document.querySelector('.login-form');

var mapLink = document.querySelector('.map-link'),
    mapModal = document.querySelector('.modal-map');

var storageLogin = localStorage.getItem('login');
var forms = document.querySelectorAll('.modal');

//Функция для закрытия модальных окон
function closer(){
    let show = document.querySelectorAll('.modal-show');

    for(let i = 0; i < show.length; i++){
        show[i].classList.remove('modal-show');
        show[i].classList.remove('modal-error');
    }
    glassModals.classList.remove('glass-open-modals');
}

loginLink.addEventListener('click', function(event){
    event.preventDefault();
    modalLogin.classList.add('modal-show');
    glassModals.classList.add('glass-open-modals');
    if(storageLogin){
        inputLogin.value = storageLogin;
        inputPassword.focus();
    } else {
        inputLogin.focus();
    }
});

try{ //Не на всех страницах есть
    mapLink.addEventListener('click', function(event){
        event.preventDefault();
        mapModal.classList.add('modal-show');
        glassModals.classList.add('glass-open-modals');
    });
} catch { console.log(`На странице нет карты ${mapLink}`); }

formLogin.addEventListener('submit', function(event){
    event.preventDefault();
    if( !inputLogin.value || !inputPassword.value ){
        modalLogin.classList.add('modal-error');
    } else {
        localStorage.setItem('login', inputLogin.value);
    }
});

/*События для закрытия модальных окон*/
glassModals.addEventListener('click', () => closer() );
//Цикл для всех кнопок закрыть по селектору .modal-close
for(let i = 0; i < closeModal.length; i++){
    closeModal[i].addEventListener('click', function(event){
        event.preventDefault();
        closer();
    });
}
//Закрытие на клик по пустому полю

//Закрытие на кнопку Esc
window.addEventListener('keydown', function(event){
    if(event.keyCode === 27){
        event.preventDefault();
        for (let i = 0; i < forms.length; i++){
            forms[i].classList.remove('modal-show');
        }
    }
});