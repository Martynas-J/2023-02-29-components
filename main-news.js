
import createHtmlElement from "./functions.js";
import newsItem from "./news-item.js";

export default function mainNews(data) {
    const mainNewsElement = createHtmlElement("div", "main-news")
    data.forEach(element => {
        const newsItemElement = newsItem(element)
        mainNewsElement.append(newsItemElement)
    });
    return mainNewsElement
}