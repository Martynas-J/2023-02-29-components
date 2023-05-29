import { createHtmlElement } from "./functions.js";
import { newsItem } from "./news-item.js";

export function mainNews() {
    const mainNewsElement = createHtmlElement("div", "main-news") 
    const newsItemElement = newsItem()

    mainNewsElement.append(newsItemElement)
    return mainNewsElement
}