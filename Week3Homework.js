//#1
const pizzaToppings = ["Pepperoni", "Mushroom", "Pineapple", "Onion"];

//#2
function greetCustomer(toppings) {
  let greeting = "Welcome, our toppings are";
  for (let topping of toppings) {
    greeting += `${topping},`;
  };
  console.log(greeting);
};
greetCustomer(pizzaToppings);

//#3
function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} pizza with `;
  for(let topping of toppings){
    order += `${topping}`
    order += `coming up`
  };
  console.log(order);
  return [size, crust, toppings];
};
getPizzaOrder("large", "thick", ["pepperoni, mushroom, pineapple, onion"]);

//#4
function preparePizza([size, crust, toppings]) {
  let prepareMessage = "Cooking pizza";
  const pizzaObject = {
    size: "large",
    crust: "thick",
    toppings: ["pepperoni",
              "mushroom",
              "pineapple",
              "onion"]
  };
  console.log(prepareMessage);
  return (pizzaObject);
};
preparePizza("large", "thick", "pepperoni", "mushroom", "pineapple", "onion");


//#5

const anotherPizzaObject = {
  size: "large",
  crust: "thick",
  toppings: ["pepperoni",
              "mushroom",
              "pineapple",
              "onion"]
};
function servePizza(zaObject) {
  let readyMessage = `Order up! Here's your ${zaObject.size} ${zaObject.crust} with`;
  for(let topping of zaObject.toppings) {
    readyMessage += `${topping},`
  };
  console.log(readyMessage);
  return anotherPizzaObject;
};
servePizza(anotherPizzaObject);


