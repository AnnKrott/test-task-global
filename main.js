//burger
const navBtn = document.querySelector('.burger__btn'),
    navIcon = document.querySelector('.burger__icon'),
    nav = document.querySelector('.header__container');

navBtn.onclick = function () {
    navIcon.classList.toggle('burger__icon--active');
    nav.classList.toggle('header__container--mobile');
    document.body.classList.toggle('no-scroll');
}

//input
const messages = {
  minLength: 'Введите не менее 4 символов!',
  maxLength: 'Введите не более 12 символов!',
  validSymbols: 'Символы !@#$%^&*() не допускаются для вввода',
  success: 'Сообщение успешно отправлено'
}
const forbiddenSymbols = /[!@#$ %^&*()]/g

const form = document.querySelector('.hero__search')
const input = document.querySelector('.search__input')
const message = document.querySelector('.message')

function deleteMessage() {
  setTimeout(() => {
    message.textContent = ''
  }, 2000)
}

function validate() {
  if (input.value.length < 4) {
    message.style.color = 'red'
    return message.textContent = messages.minLength
  }
  if (input.value.length > 12) {
    message.style.color = 'red'
    return message.textContent = messages.maxLength
  }
  if (input.value.match(forbiddenSymbols)) {
    message.style.color = 'red'
    return message.textContent = messages.validSymbols
  }
   message.style.color = 'green'
   message.textContent = messages.success  
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  validate()
  deleteMessage()
})

//ajax
const text = document.querySelector('.hero__grey-text')

function fetchData() {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://baconipsum.com/api/?type=lucky');
  request.send()
  text.textContent = 'Загрузка...'

  request.addEventListener('load', () => {
    if (request.status === 200) {
      const data = JSON.parse(request.responseText)[0];
      text.textContent = data
      console.log(request);
    }
  })

}

fetchData()



