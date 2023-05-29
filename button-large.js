import { createHtmlElement } from "./functions.js";

export function buttonLarge(text){
const buttonLargeElement = createHtmlElement("a", "button-large", "#")
buttonLargeElement.textContent = text
return buttonLargeElement
}