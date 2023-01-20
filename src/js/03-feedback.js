import throttle from "lodash.throttle"

const form = document.querySelector('.feedback-form')
const LOCALSTORAGE_KEY = 'feedback-form-state'
const keysObj = {}

const input = function (evt) {
    const email = form.elements.email.value
    const message = form.elements.message.value

    keysObj.email = email
    keysObj.message = message

    keysJson = JSON.stringify(keysObj)
    localStorage.setItem('LOCALSTORAGE_KEY', keysJson)

}


form.addEventListener('input', throttle(input, 500))



if (localStorage.getItem('LOCALSTORAGE_KEY') !== null) {
    const savedKeysJson = localStorage.getItem('LOCALSTORAGE_KEY')
    
    const savedKeysObj = JSON.parse(savedKeysJson)

    keysObj.email = savedKeysObj.email
    keysObj.message = savedKeysObj.message
    
    form.elements.email.value = savedKeysObj.email
    form.elements.message.value = savedKeysObj.message
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(keysObj)
    form.reset()
    localStorage.clear()
})
