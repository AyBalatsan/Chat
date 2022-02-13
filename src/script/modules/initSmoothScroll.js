export default function initSmoothScroll(){  
  const anchors = document.querySelectorAll('.navigation-site__link')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      
      const blockID = anchor.getAttribute('href')
     

      let elToscroll = document.querySelector(blockID);
      

      console.log(elToscroll);

      // document.querySelector('#service-field').scrollIntoView({
      //       behavior: 'smooth'            
      //  });

      elToscroll.scrollIntoView({
        behavior: 'smooth'
      });

      
    })
}
  // document.querySelectorAll('.navigation-site__item').forEach((item) => 
  // item.addEventListener('click', function (e) {    
  //     const id = '' + e.target.getAttribute('href');
  //     function smoothScroll(){        
  //       document.querySelector('#service-field').scrollIntoView({
  //           behavior: 'smooth'            
  //       });
  //     smoothScroll()  
  //   }
  // }))
}  