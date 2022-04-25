let pizzaToppings = ["Pepperoni", "Mushroom", "Pineapple", "Onion"];

function greetCustomer(pizzaPlace, pizzaToppings) {
  console.log(`Welcome to ${pizzaPlace}, our toppings are ${pizzaToppings}`);
};
greetCustomer("Pizza Pals", "Pepperoni, Mushroom, Pineapple, Onion");

function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size} ${crust} pizza with ${toppings} coming up!`);
};
getPizzaOrder("large", "thick", ["pepperoni, mushroom, pineapple, onion"]);

function preparePizza([size, crust, toppings],) {
  console.log(`Your ${[size, crust, toppings]} pizza is cooking!`);
}
preparePizza(["large", "thick crust", "pepperoni mushroom pineapple onion"]);

function servePizza({size, crust, toppings}) {
  let pizzaObject = {size: "large", crust: "thick", toppings: "pepperoni"}
  console.log(`Order up! Here's your ${size} ${crust} with ${toppings}. Enjoy!`);
}
servePizza("large", "thick", "pepperoni");


