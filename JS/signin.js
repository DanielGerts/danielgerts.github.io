// This code checks if all fields in signin.html
// are filled correctly, and if it is - it'll change the color of the button to green

let usernameInput = document.getElementById("username")
let emailInput = document.getElementById("email")
let passwordInput = document.getElementById("password")
let repeatPasswordInput = document.getElementById("repeat_password")
let checkbox = document.getElementById("agree")
let btn = document.querySelector('button')

function changeButtonColor()
{
    const patterForEmailValidation = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
)
    if (usernameInput.value.length > 4 &&
        passwordInput.value.length >= 8 && repeatPasswordInput.value.length >= 8
        && checkbox.checked && repeatPasswordInput.value === passwordInput.value
        && patterForEmailValidation.test(emailInput.value))
    {
        btn.style.transition = " 0.5s";
        btn.style.backgroundColor = "rgba(89, 141, 102, 1)";
        btn.style.color = "#f4f6f5";
        repeatPasswordInput.style.backgroundColor = "1px solid rgba(89, 141, 102, 1)"
        btn.removeAttribute("disabled")
    }
    else
    {
        btn.style.backgroundColor = "";
        btn.style.color = "";
        btn.setAttribute("disabled", "")
    }
}

function checkForIdenticalPasswords()
{
    if (repeatPasswordInput.value !== passwordInput.value && repeatPasswordInput.value !== "")
    {
        incorrectPasswordMsg.style.color = "red";
        incorrectPasswordMsg.innerText = "Пароли не совпадают"
        repeatPasswordInput.style.border = "1px solid red"
    }
    else
    {
        incorrectPasswordMsg.innerText = ""
        repeatPasswordInput.style.border = "1px solid red"
        repeatPasswordInput.style.border =  ""
    }
}

//Checks if all the fields are filled correctly
usernameInput.addEventListener("input", changeButtonColor);
emailInput.addEventListener("input", changeButtonColor);
passwordInput.addEventListener("input", changeButtonColor);
repeatPasswordInput.addEventListener("input", changeButtonColor)
checkbox.addEventListener("change", changeButtonColor)

// Make the repeat password with red if the passwords aren't identical
let incorrectPasswordMsg = document.getElementById("incorrect_password")
passwordInput.addEventListener('input', checkForIdenticalPasswords)
repeatPasswordInput.addEventListener("input", checkForIdenticalPasswords)

