import createHtmlElement from "./functions.js";

export default function buttonLarge(text, link){
const buttonLargeElement = createHtmlElement("a", "button-large", link)
buttonLargeElement.textContent = text
return buttonLargeElement
}
