export default function initTextChat(){    
  window.addEventListener( 'keyup', event => {  
    if( event.code === 'Enter' ){
      const avtorization = document.querySelector('.page-main--active-authorization')
      if(avtorization){  
        const dialogs = document.querySelector('.chat__dialog')
        let parag = document.createElement('p');
        let text = document.querySelector('.chat__textarea')
        parag.textContent = text.value
        parag.classList.add('chat__text--user')
        dialogs.append(parag)
        text.value = ''
      }
    } 
  });
}