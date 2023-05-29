import { createHtmlElement } from "./functions.js";

export function buttonLarge(text){
const buttonLargeElement = createHtmlElement("a", "button-large", "#")
buttonLargeElement.textContent = "Visos naujienos"
return buttonLargeElement
}