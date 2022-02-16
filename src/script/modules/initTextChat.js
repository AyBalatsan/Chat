export default function initTextChat(){    
  window.addEventListener( 'keyup', event => {  
    if( event.code === 'Enter' ){
      const authorization = document.querySelector('.page-main--active-authorization')
      if(authorization){  
        const dialogs = document.querySelector('.chat__dialog')
        let paragraph = document.createElement('p');
        let text = document.querySelector('.chat__textarea')
        
        if (text.value == '') {
              
        } else{
          paragraph.textContent = text.value
          paragraph.classList.add('chat__text--user')
          dialogs.append(paragraph)     
          console.log('hi'); 
        }
        text.value = ''
      }
    } 
  });
}