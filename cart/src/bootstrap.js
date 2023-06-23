import faker from "faker";

const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

document.getElementById("cart-dev").innerHTML = cartText;
