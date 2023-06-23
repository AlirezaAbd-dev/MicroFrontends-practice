import { mount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("Container");

const el = document.querySelector("#my-products");

mount(el);

const cartEl = document.querySelector("#my-cart");
cartMount(cartEl);
