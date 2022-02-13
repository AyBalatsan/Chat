export default function popUp() {
    const buttonClouse = document.querySelector('.pop-up__clouse')
    const buttonOpenDesktop = document.querySelector('.page-header__button--desktop')
    const buttonOpenTablet = document.querySelector('.page-header__button--tablet')
    const buttonOpenMobile = document.querySelector('.page-header__button--mobile')
    const body = document.querySelector('body')
    const popUp = document.querySelector('.pop-up')
    
    const open = (item) =>{
        item.addEventListener('click', () =>{
            popUp.classList.remove('visually-hidden');
            body.style.overflow = 'hidden';            
        })
    }
    open(buttonOpenDesktop)
    open(buttonOpenTablet)
    open(buttonOpenMobile)  

    buttonClouse.addEventListener('click', () =>{
        popUp.classList.add('visually-hidden');
        body.style.overflow = 'visible';
    })
}