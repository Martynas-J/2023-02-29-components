
import createHtmlElement from "./functions.js";
import newsItem from "./news-item.js";

export default function secondaryNews(data) {
    const secondaryNewsElement = createHtmlElement("div", "secondary-news")
    data.forEach(element => {
        const newsItemElement = newsItem(element)
        secondaryNewsElement.append(newsItemElement)
    });
    return secondaryNewsElement
}


