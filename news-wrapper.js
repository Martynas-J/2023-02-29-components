import { buttonLarge } from "./button-large.js";
import { createHtmlElement } from "./functions.js";
import { mainNews } from "./main-news.js";


export function newsWrapper() {
    const newsWrapperElement = createHtmlElement("div", "news-wrapper")
    const title = createHtmlElement("h2", "section-title")
    const mainNewsElement = mainNews()
    const secondaryNewsElement = createHtmlElement("h2", "secondary-news")
    const buttonLargeElement = buttonLarge("Visos naujienos")

    secondaryNewsElement.textContent = "Naujienos"

    newsWrapperElement.append(title, mainNewsElement, secondaryNewsElement, buttonLargeElement)
return newsWrapperElement
}