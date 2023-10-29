
function notify() {
    alert("Loadin weather report")
}
function tempSwitch(element) {
    var current = element.value;
    var temp = document.querySelectorAll(".weatherCard ul li p span");
    console.log(current);
    if (current == "fahrenheit") {
        for (let i = 0; i < temp.length; i++) {
            let temp1 = [];
            let newValue = ((temp[i].innerHTML) * (9 / 5)) + 32;
            temp[i].innerHTML = Math.floor(newValue);
        }
    }
    else if (current == "celcius") {
        for (let i = 0; i < temp.length; i++) {
            let temp1 = [];
            let newValue = ((temp[i].innerHTML - 32) * (5 / 9));
            temp[i].innerHTML = Math.ceil(newValue);
        }
    }
}
function hide() {
    let popUp = document.querySelector(".cookiePanel")
    popUp.remove();
}