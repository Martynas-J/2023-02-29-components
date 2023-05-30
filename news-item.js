import createHtmlElement from "./functions.js";

export default function newsItem(data) {
    let { imgSrc, newsCategory, newsTitle, newsDate } = data
    const newsItemElement = createHtmlElement("div", "news-item")

    if (newsTitle) {
        const newsTitleElement = createHtmlElement("h3", "news-title")
        newsTitleElement.textContent = newsTitle
        const linkNewsItem = createHtmlElement("a", "", "#")
        const newsContentElement = createHtmlElement("div", "news-content")
        if (imgSrc) {
            const imageWrapperElement = createHtmlElement("div", "image-wrapper")
            const imageElement = createHtmlElement("img")
            imageElement.src = imgSrc
            imageWrapperElement.append(imageElement)
            linkNewsItem.append(imageWrapperElement)
        }
        if (newsCategory) {
            const newsCategoryElement = createHtmlElement("span", "news-category")
            newsCategoryElement.textContent = newsCategory
            newsContentElement.append(newsCategoryElement)
        }
        newsContentElement.append(newsTitleElement)

        if (newsDate) {
            const newsDateElement = createHtmlElement("span", "news-date")
            newsDateElement.textContent = newsDate
            newsContentElement.append(newsDateElement)
        }
        linkNewsItem.append(newsContentElement)
        newsItemElement.append(linkNewsItem)

    }
    return newsItemElement
}
