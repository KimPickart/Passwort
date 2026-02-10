let fields = document.querySelectorAll(".number");
let input = document.querySelector(".input");
let zero = document.querySelector(".zero");
let apply = document.querySelector(".apply");
let arrowRight = document.querySelector(".delete");

let password = ""; 

fields.forEach(field => {
    field.addEventListener("click", function () {
        let number = this.textContent;

        let passwordNumber = document.createElement("p");
        passwordNumber.className = "password_number";
        passwordNumber.textContent = number;
        input.appendChild(passwordNumber);

        password += number;
        console.log(password);
    });
});

zero.addEventListener("click", function () {
    let passwordNumber = document.createElement("p");
    passwordNumber.className = "password_number";
    passwordNumber.textContent = "0";
    input.appendChild(passwordNumber);

    password += "0";
    console.log(password);
});

arrowRight.addEventListener("click", function () {
    if (input.lastChild) {
        input.removeChild(input.lastChild);
        password = password.slice(0, -1);
        console.log(password);
    }
});

apply.addEventListener("click", function () {
    if (password === "03012025") {
        alert("Passwort korrekt!");
        window.location.href = "valentinstag.html";
    } else {
        alert("Falsches Passwort!");
    }
});
