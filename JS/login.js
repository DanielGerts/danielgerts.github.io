// This code checks if all fields in login.html
// are filled, and if it is - it'll change the color of the button to green

let userNameInput = document.getElementById("name");
let passwordInput = document.getElementById("password");
let loginBtn = document.querySelector("button");
function changeButtonColor()
{
    if (userNameInput.value.length > 4 && passwordInput.value.length > 8)
    {
        loginBtn.style.transition =" 0.5s";
        loginBtn.style.backgroundColor = "rgba(89, 141, 102, 1)";
        loginBtn.style.color = "#f4f6f5";
    }
    else
    {
        loginBtn.style.backgroundColor = "";
        loginBtn.style.color = "";
    }
}

passwordInput.addEventListener("input", changeButtonColor);
userNameInput.addEventListener("input", changeButtonColor);