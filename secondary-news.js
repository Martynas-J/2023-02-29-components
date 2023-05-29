import { SECONDARY_NEWS_DATA } from "./config.js";
import { createHtmlElement } from "./functions.js";
import { newsItem } from "./news-item.js";

export function secondaryNews() {
    const secondaryNewsElement = createHtmlElement("div", "secondary-news")
    SECONDARY_NEWS_DATA.forEach(element => {
        const newsItemElement = newsItem(element)
        secondaryNewsElement.append(newsItemElement)
    });
    return secondaryNewsElement
}


