const navbar = document.querySelector(".main");
let toggleOn = document.getElementById("toggle-on");
let toggleOff = document.getElementById("toggle-off");
let dropdown = document.querySelector(".dropdown");
let bonus = document.querySelector(".pro")
let createAccountButton = document.querySelectorAll('.open');



bonus.onclick = function () {
    const confirmBonus = confirm("You are almost close to success!");
    if (confirmBonus) {
        alert("Welcome !!!.");
        window.location.href = "signup.html";
    } else {
        alert("Bonus canceled.");
    }
};

createAccountButton.onclick = function()
{
                  
    window.location.href = "signup.html";
}    

mmmdow.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
})

toggleOn.onclick = function () {
    dropdown.style.display = 'block';
    toggleOn.style.display = 'none';
    toggleOff.style.display = 'block';
};

toggleOff.onclick = function () {
    dropdown.style.display = 'none';
    toggleOff.style.display = 'none';
    toggleOn.style.display = 'block';
}



