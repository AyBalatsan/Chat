export default function initPhone(){
    const phone = document.querySelector('.js-button-chat');
    const main = document.querySelector('.page-main');
    const close = document.querySelector('.js-pop-up__close')
    
    
    phone.addEventListener('click', function () {
        const closeChat = document.querySelector('.js-button-chat--close');
        if (closeChat) {
            main.classList.toggle('page-main--active-authorization') 
        } else {
            main.classList.add('page-main--active-button');           
        }
    })
    close.addEventListener('click', function () {
        main.classList.remove('page-main--active-button');        
    })
    
}  