export default function initValid(){
  const buttonRegistration = document.querySelector('.js-form__input-button');
  const buttonLogIn = document.querySelector('#button-in')
  const form = document.querySelector('.js-form-registration')
  const registrationLogin = document.querySelector('#login-field')
  const password = document.querySelector('.form__input-field--password');
  const passwordAgain = document.querySelector('.form__input-field--password-again');
  const main = document.querySelector('.page-main');
  const input = form.querySelectorAll('.form__input-field')
  const loginName = document.querySelector('#login-avtor')
  const loginPassword = document.querySelector('#password')
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

    localStorage.setItem('users', JSON.stringify(users))
    buttonRegistration.addEventListener('click', function (item) {
        item.preventDefault();
        input.forEach((field) => field.classList.remove('error'))
        if(registrationLogin.value !== '' && password.value !== '' && passwordAgain.value !== ''){              
          if (password.value == passwordAgain.value) {
            let usersLocal = JSON.parse(localStorage.getItem('users'))
            
            let isExcellent = false;
            for (let index = 0; index < usersLocal.length; index++) {
              const element = usersLocal[index];
              if (element.name == registrationLogin.value) {
                isExcellent = true;
                break;
              }
            }
            if(!isExcellent) {
              const body = {
                name: registrationLogin.value,
                password: password.value
              }
              usersLocal.push(body)
              const addBodyUser = usersLocal;              
              localStorage.setItem('users', JSON.stringify(addBodyUser))
              const popUp = document.querySelector('.pop-up__wrapper');
              popUp.classList.remove('pop-up__wrapper--register')
              popUp.classList.add('pop-up__wrapper--login')
              alert('Вы успешно зарегистрированы')
            }
            else{
              alert('Логин с таким именем существует')
            }                                      
          }
          else{
            password.value = ''
            password.classList.add('error')
            passwordAgain.value = ''
            passwordAgain.classList.add('error')
            alert('Пароли не совпадают')
          }
        } 
        else{
          alert('Заполните пожалуйста все поля')
        }
    }) 
    buttonLogIn.addEventListener('click', function (item) {
      item.preventDefault();
      if(loginName.value !== '' && loginPassword.value !== ''){
        let usersLocal = JSON.parse(localStorage.getItem('users'))
        let isExcellent = false;
        for (let index = 0; index < usersLocal.length; index++) {
          const element = usersLocal[index];

          if (element.name == loginName.value && element.password == loginPassword.value) {        
            main.classList.remove('page-main--active-button')
            main.classList.add('page-main--active-authorization')                
            buttonPhone.classList.add('js-button-chat--close')                 
            isExcellent = true;
            break
          }
        }
        if(!isExcellent){
          alert('Неправильный логин или пароль')
        }
      }
      else{
        alert('Заполните пожалуйста все поля')
      }
    })    
     
}
