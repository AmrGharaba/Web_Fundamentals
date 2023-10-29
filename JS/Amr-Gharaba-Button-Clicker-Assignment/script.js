function changeState(element) {
    var value = element.innerText
    if (element.innerText == "Logout") {
        element.innerText = "Login"
    }
    else {
        element.innerText = "Logout";
    }
}
function hide(element){
    element.remove();
}
function note(element){
    alert("Ninja was liked");
}
