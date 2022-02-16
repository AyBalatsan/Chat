export default function initTextChat(){    
  window.addEventListener( 'keyup', event => {  
    if( event.code === 'Enter' ){
      const authorization = document.querySelector('.page-main--active-authorization')
      if(authorization){  
        const dialogs = document.querySelector('.chat__dialog')
        let paragraph = document.createElement('p');
        let text = document.querySelector('.chat__textarea')
        const textValue = text.value
        if (textValue.length === 0 || !textValue.trim()) {
          alert('Я пустая строка')           
        }
        else{
          paragraph.textContent = text.value
          paragraph.classList.add('chat__text--user')
          dialogs.append(paragraph)  
        }
        text.value = ''
      }
    } 
  });
}