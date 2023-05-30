import createHtmlElement from "./functions.js";

export default function newsItem(data) {
    let {imgSrc, newsCategory, newsTitle, newsDate} = data
    const newsItemElement = createHtmlElement("div", "news-item")
    const linkNewsItem = createHtmlElement("a", "", "#")
    const imageWrapperElement = createHtmlElement("div", "image-wrapper")
    const newsContentElement = createHtmlElement("div", "news-content")
    const imageElement = createHtmlElement("img")
    const newsCategoryElement = createHtmlElement("span", "news-category")
    const newsTitleElement = createHtmlElement("h3", "news-title")
    const newsDateElement = createHtmlElement("span", "news-date")

    imageElement.src = imgSrc
    newsCategoryElement.textContent = newsCategory
    newsTitleElement.textContent = newsTitle
    newsDateElement.textContent = newsDate

    newsContentElement.append(newsCategoryElement, newsTitleElement, newsDateElement)
    imageWrapperElement.append(imageElement)
    linkNewsItem.append(imageWrapperElement, newsContentElement)
    newsItemElement.append(linkNewsItem)
    return newsItemElement
}
