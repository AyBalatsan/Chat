export default function initValid(){
  const buttonRegistration = document.querySelector('.js-form__input-button');
    const form = document.querySelector('.js-form-registration')
    const password = document.querySelector('.form__input-field--password');
    const passwordAgain = document.querySelector('.form__input-field--password-again');
    const main = document.querySelector('.page-main');
    const input = form.querySelectorAll('.form__input-field')
    const buttonPhone = document.querySelector('.button-chat')

    let users = [{
      name: 'admin',
      password: 'qwe123'
      },
      {
        name: 'Andrey',
        password: '2514'
      },
      {
        name: 'Sergey',
        password: 'dsaewq'
      },
    ]
    const usersString = JSON.stringify(users)
    console.log(usersString);
    const usersParse = JSON.parse(usersString)
    console.log(usersParse);
    buttonRegistration.addEventListener('click', function (item) {
        item.preventDefault();
        input.forEach((field) =>{
            field.classList.remove('error')
            if(field.value !== ''){              
              if (password.value == passwordAgain.value && password.value !== '') {
                                 
              }
              else{
                password.value = ''
                password.classList.add('error')
                passwordAgain.value = ''
                passwordAgain.classList.add('error')
                alert('Пароли не совпадают')
                
              }
            } else{
              field.classList.add('error')
                
            }
        }) 
        
  })   
}
// main.classList.remove('page-main--active-button')
// main.classList.add('page-main--active-authorization')                
// buttonPhone.classList.add('js-button-chat--close')  