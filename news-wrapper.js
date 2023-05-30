import buttonLarge from "./button-large.js";
import createHtmlElement from "./functions.js";
import mainNews from "./main-news.js";
import secondaryNews from "./secondary-news.js";


export default function newsWrapper(title, mainNewsData, secondaryNewsData) {
    const newsWrapperElement = createHtmlElement("div", "news-wrapper")
    const mainNewsElement = mainNews(mainNewsData)
    const secondaryNewsElement = secondaryNews(secondaryNewsData)
    
    const buttonLargeElement = buttonLarge("Visos naujienos")
    if (title) {
        const newsTitleElement = createHtmlElement("h2", "section-title")
        newsTitleElement.textContent = title
        newsWrapperElement.append(newsTitleElement)
    }

    newsWrapperElement.append(mainNewsElement, secondaryNewsElement, buttonLargeElement)
return newsWrapperElement
}