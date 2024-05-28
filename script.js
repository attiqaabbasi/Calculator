let inputScreen = document.querySelector("#input");
let buttons = document.querySelectorAll("button");
let string = "";
buttons.forEach(function (button) {
    button.addEventListener("click", (key) => {
        if (key.target.innerHTML == "=") {
            string = eval(string);
            inputScreen.value = string;
        } else if (key.target.innerHTML == "AC") {
            string = "";
            inputScreen.value = 0;
        } else if (key.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            inputScreen.value = string;
        } else{
            string += key.target.innerHTML;
            inputScreen.value = string;
        }
    })
})



