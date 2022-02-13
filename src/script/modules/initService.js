export default function initService(){
  var button = document.querySelector('.results__toggle');
  var elements = document.querySelectorAll('.hidden-item');



  button.addEventListener('click', function () {

    button.classList.toggle('opened');

    elements.forEach(
      (child) => child.classList.toggle('show')
    );

  });
}