// This code checks if all fields in signin.html
// are filled correctly, and if it is - it'll change the color of the button to green

let usernameInput = document.getElementById("username")
let emailInput = document.getElementById("email")
let passwordInput = document.getElementById("password")
let repeatPasswordInput = document.getElementById("repeat_password")
let checkbox = document.getElementById("agree")
let btn = document.querySelector('button')
function usernameValidation()
{

    if (usernameInput.value.length >= 3)
    {
        incorrectUsernameMsg.innerText = ""
        usernameInput.style.border = ""
        return true
    }
    else if (usernameInput.value === "")
    {
        incorrectUsernameMsg.innerText = ""
        usernameInput.style.border = ""
        return false

    }
    else
    {
        incorrectUsernameMsg.style.color = "red"
        incorrectUsernameMsg.innerText = "Слишком короткое имя пользователя"
        usernameInput.style.border = "1px solid red"
        return false
    }
}
function emailValidation()
{
    const patterForEmailValidation = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
    if (patterForEmailValidation.test(emailInput.value))
    {

        emailInput.style.border = ""
        incorrectEmailMsg.innerText = ""
        return true
    }
    else if (emailInput.value === "")
    {
        incorrectEmailMsg.style.border =  ""
        emailInput.style.border = ""
        incorrectEmailMsg.innerText = ""
        return false
    }
    else
    {
        incorrectEmailMsg.style.color = "red";
        incorrectEmailMsg.style.marginTop = "-10px"
        emailInput.style.border = "1px solid red"
        incorrectEmailMsg.style.marginBottom = "18px"
        incorrectEmailMsg.innerText = "Неправильная почта"
        return false
    }
}

function checkForIdenticalPasswords()
{
    if (repeatPasswordInput.value !== passwordInput.value && repeatPasswordInput.value !== "")
    {
        incorrectPasswordMsg.style.color = "red";
        incorrectPasswordMsg.innerText = "Пароли не совпадают"
        passwordInput.style.border = "1px solid red"
        repeatPasswordInput.style.border = "1px solid red"
        return false
    }
    else if (passwordInput.value.length <= 8)
    {
        incorrectPasswordMsg.style.color = "red";
        incorrectPasswordMsg.innerText = "Пароль слишком короткий"
        passwordInput.style.border = "1px solid red"
        repeatPasswordInput.style.border = "1px solid red"
        return false
    }
    else if (passwordInput.value === "" || repeatPasswordInput.value === "")
    {
        incorrectPasswordMsg.innerText = ""
        passwordInput.style.border = ""
        repeatPasswordInput.style.border =  ""
        return false
    }

    else
    {
        passwordInput.style.border = ""
        incorrectPasswordMsg.innerText = ""
        repeatPasswordInput.style.border =  ""
        return true
    }
}

function changeButtonColor()
{
    if (checkForIdenticalPasswords()  && emailValidation() && usernameValidation() && checkbox.checked)
    {
        btn.style.transition = "0.5s"
        btn.style.backgroundColor = 'rgba(89, 141, 102, 1)';
        btn.style.color = "white";
        btn.disabled = false
    }
    else
    {
        btn.style.transition = "0.5s"
        btn.style.color = "rgba(89, 141, 102, 1)";
        btn.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        btn.disabled = true
    }

}

// The code makes sure that the username is valid
let incorrectUsernameMsg = document.getElementById("incorrect_username")
usernameInput.addEventListener("input", usernameValidation)

// The code makes sure that the email is valid
let incorrectEmailMsg = document.getElementById("incorrect_email")
emailInput.addEventListener("input", emailValidation)

// The code makes sure that the passwords are valid
let incorrectPasswordMsg = document.getElementById("incorrect_password")
passwordInput.addEventListener('input', checkForIdenticalPasswords)
repeatPasswordInput.addEventListener("input", checkForIdenticalPasswords)

// The code change the color of the button from white to green if the form filled correctly
usernameInput.addEventListener("input", changeButtonColor)
repeatPasswordInput.addEventListener("input", changeButtonColor)
passwordInput.addEventListener('input', changeButtonColor)
emailInput.addEventListener("input", changeButtonColor)
checkbox.addEventListener("input", changeButtonColor)

