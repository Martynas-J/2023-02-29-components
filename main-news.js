import {MAIN_NEWS_DATA,} from "./config.js";
import { createHtmlElement } from "./functions.js";
import { newsItem } from "./news-item.js";

export function mainNews() {
    const mainNewsElement = createHtmlElement("div", "main-news")
    MAIN_NEWS_DATA.forEach(element => {
        const newsItemElement = newsItem(element)
        mainNewsElement.append(newsItemElement)
    });
    return mainNewsElement
}