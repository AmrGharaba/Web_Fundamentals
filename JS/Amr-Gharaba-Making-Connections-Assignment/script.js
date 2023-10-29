var newName = "Amr Gharaba", connectionNumber = 418, requestsNumber = 2;
function rename(){
    var name = document.querySelector(".card .body h1");
    name.innerText = newName;
}
function remove(element){
    var row = element.closest(".row");
    var connectionRequsts = document.querySelector(".pending > p span");
    row.remove();
    requestsNumber--;
    connectionRequsts.innerText = requestsNumber;
}
function accept(){
    connections = document.querySelector(".contacts span")
    connectionNumber++;
    connections.innerText = connectionNumber;
}