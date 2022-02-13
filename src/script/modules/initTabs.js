export default function initTabs(){
  document.querySelectorAll('.breadcrumbs__link').forEach((item) => 
      item.addEventListener('click', function (e) {
          e.preventDefault();
          const id = e.target.getAttribute('href').replace('#', '');
          const popUp = document.querySelector('.pop-up__wrapper');
          switch(id) {
              case 'register':  
                popUp.classList.remove('pop-up__wrapper--login')
                popUp.classList.add('pop-up__wrapper--register')
                break
            
              case 'login':  
                popUp.classList.remove('pop-up__wrapper--register')
                popUp.classList.add('pop-up__wrapper--login')
                break
            
              default:
                
                break
            }            
      })
  
  );    
  
}
