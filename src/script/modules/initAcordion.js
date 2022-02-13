// export default function initAcordion(){
//   document.querySelectorAll('.achievements__shell').forEach((item) =>
//     item.addEventListener('click', () =>{
//       const parent = item.parentNode;
//       if (parent.classList.contains('achievements__item--active')) {
//         parent.classList.remove('achievements__item--active');
//         console.log('сработало по if')
//       } else {
//         const achievementsItem = document.querySelectorAll('.achievements__item');
//         for (let i =0; i<achievementsItem.length; i++){
//           achievementsItem[i].classList.remove('achievements__item--active');
//         }
//         console.log('сработало по def')
//         parent.classList.add('achievements__item--active')
//       }
//     })
//   )
//   document.querySelectorAll('.services__shell-up').forEach((itemS) =>
//     itemS.addEventListener('click', () =>{
//       const parentServices = itemS.parentNode;
      
//       if (parentServices.classList.contains('services__item--active')) {
//         parentServices.classList.remove('services__item--active');
//         console.log('сработало по if')
//       } 
//       else {
//         const servicesItem = document.querySelectorAll('.services__item');
//         for (let i =0; i<servicesItem.length; i++){
//           servicesItem[i].classList.remove('services__item--active');
//         }
//         console.log('сработало по 23f')
//         parentServices.classList.add('services__item--active')
//       }
//     })
//   )  
//   document.querySelectorAll('.accordion__trigger').forEach((itemTrigger) =>
//     itemTrigger.addEventListener('click', () =>{
//       const parentTrigger = itemTrigger.parentNode;
//       if (parentTrigger.classList.contains('accordion__item--active-js')) {
//         parentTrigger.classList.remove('accordion__item--active-js');
//       } else {
//         const accordionItem = document.querySelectorAll('.accordion__item');
//         for (let i =0; i<accordionItem.length; i++){
//           accordionItem[i].classList.remove('accordion__item--active-js');
//         }
//         parentTrigger.classList.add('accordion__item--active-js')
//       }
//     })
//   )  
// }