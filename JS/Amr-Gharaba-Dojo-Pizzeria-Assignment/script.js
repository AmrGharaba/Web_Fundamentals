function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var order1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(order1);
var order2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(order2);
var order3 = pizzaOven("Pan made", "buffalo sauce", "mozzarella", "chicken");
console.log(order3);
var order4 = pizzaOven("Italian", "pesto sauce", ["mozzarella", "parmesian"], ["tomato", "chicken"]);
console.log(order4);

function randomPizza() {
    let randomPizza = {};
    let crust = { 0: "deep dish", 1: "hand tossed", 2: "Pan made", 3: "Italian" };
    let sauce = { 0: "traditional", 1: "marinara", 2: "buffalo sauce", 3: "pesto sauce" };
    let cheeze = { 0: "mozzarella", 1: "feta", 2: "parmesian" };
    let topping = { 0: "pepperoni", 1: "sausage", 2: "mushrooms", 3: "chicken" };
    let randoCrust = Math.floor(Math.random() * 4)
    let randoSauce = Math.floor(Math.random() * 4)
    let randoCheese = Math.floor(Math.random() * 4)
    let randoTopping = Math.floor(Math.random() * 4)
    randomPizza.crustType = crust[randoCrust];
    randomPizza.sauceType = sauce[randoSauce];
    randomPizza.cheeses = cheeze[randoCheese];
    randomPizza.toppings = topping[randoTopping];
    return randomPizza;

}
console.log(randomPizza());

const pizzaMatrix = [
    ["deep dish", "hand tossed","Pan made","Italian"],
    ["traditional", "marinara", "buffalo sauce", "pesto sauce"],
    ["mozzarella","feta","parmesian" ],
    ["pepperoni","sausage","mushrooms","chicken"]
]
const randPizzaMatrix = [];


for(let i = 0 ; i < 4 ; i++){
    let randomNumber;
    if(i == 2){
    randomNumber = Math.floor(Math.random() * 3)
    }
    else{
    randomNumber = Math.floor(Math.random() * 4)
    }
    randPizzaMatrix.push(pizzaMatrix[i][randomNumber])
}
    let randomPizz = {};
    randomPizz.crustType = randPizzaMatrix[0];
    randomPizz.sauceType = randPizzaMatrix[2];
    randomPizz.cheeses = randPizzaMatrix[2];
    randomPizz.toppings = randPizzaMatrix[3];
console.log(randomPizz);