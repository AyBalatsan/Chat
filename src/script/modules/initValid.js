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
    // запись в local
    localStorage.setItem('users', JSON.stringify(users))
    // получаем ключ с local
      
    
    // закидываем нового пользователя
    
    
    // const addBodyUser = usersLocal.push(body)
    
    // localStorage.removeItem('users')
    // localStorage.setItem('users', JSON.stringify(addBodyUser))
    // let newListUsersLocal = JSON.parse(localStorage.getItem('users')) 
    // console.log(newListUsersLocal);

    buttonRegistration.addEventListener('click', function (item) {
        item.preventDefault();
        input.forEach((field) => field.classList.remove('error'))
        if(registrationLogin.value !== '' && password.value !== '' && passwordAgain.value !== ''){              
          if (password.value == passwordAgain.value) {
            let usersLocal = JSON.parse(localStorage.getItem('users'))
            
            let a = false;
            for (let index = 0; index < usersLocal.length; index++) {
              const element = usersLocal[index];
              if (element.name == registrationLogin.value) {
                a = true;
                break;
              }
            }
            if(!a) {
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
              alert('ВЫ успешно зарегистрированы')
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
        let isFain = false;
        for (let index = 0; index < usersLocal.length; index++) {
          const element = usersLocal[index];

          if (element.name == loginName.value && element.password == loginPassword.value) {        
            main.classList.remove('page-main--active-button')
            main.classList.add('page-main--active-authorization')                
            buttonPhone.classList.add('js-button-chat--close')                 
            isFain = true;
            break
          }
        }
        if(!isFain){
          alert('Неправильный логин или пароль')
        }
      }
      else{
        alert('Заполните пожалуйста все поля')
      }
    })    
     
}
