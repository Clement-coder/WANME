let signupBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('signinBtn');
let inputName = document.getElementById('inputName');
let emailField = document.getElementById('inputEmail');
let passwordField = document.getElementById('inputPassword');
let toggleOn = document.getElementById("toggle-on");
let toggleOff = document.getElementById("toggle-off");
let dropdown = document.querySelector(".dropdown");
let userDetails = document.querySelector(".user-details");


signinBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    tittle.innerHTML = "Sign In";
    signupBtn.classList.add("disabled");
    signinBtn.classList.remove("disabled");
};

signupBtn.onclick = function () {
    nameField.style.maxHeight = "45px";
    tittle.innerHTML = "Sign Up";
    signupBtn.classList.remove("disabled");
    signinBtn.classList.add("disabled");
};

toggleOn.onclick = function () {
    dropdown.style.display = 'block';
    toggleOn.style.display = 'none';
    toggleOff.style.display = 'block';
    dropdown.style.maxHeight = "auto";
};

toggleOff.onclick = function () {
    dropdown.style.display = 'none';
    toggleOff.style.display = 'none';
    toggleOn.style.display = 'block';
}




function signUpRedirect() {
    if (inputName && inputName.value.trim())
        {
        alert(`Thank you, ${inputName.value}, for signing up on our platform ${emailField.value} Your password ${passwordField.value} keep passwoj!`)
        window.location.href = 'index.html';
    } else {
        alert("Please enter your Full Name before signing up!");
    }
}




function signUpRedirect() {
    if (emailField && emailField.value.trim())
        {
        alert(`Thank you, ${inputName.value}, for signing up on our platform ${emailField.value} password ${passwordField.value}!`)
        window.location.href = 'index.html';
    } else {
        alert("Please enter your Email Address before signing up!");
    }
}


function signUpRedirect() {
    if (passwordField && passwordField.value.trim())
        {
        alert(`Thank you, ${inputName.value}, for signing up on our platform ${emailField.value} password ${passwordField.value}!`)
        window.location.href = 'index.html';
    } else {
        alert("Please input legit password before signing up!");
    }
}



function signUpRedirect() {
    if (inputName, emailField, passwordField.value.trim())
        {
            alert(`Thank you, ${inputName.value}, for signing up on our platform ${emailField.value} password ${passwordField.value}!`)
            window.location.href = 'index.html';
       
    } else {
        alert("Please enter full information before signing up!");
    }
}




signupBtn.addEventListener('click', signUpRedirect);
signinBtn.addEventListener('click', signInRedirect);