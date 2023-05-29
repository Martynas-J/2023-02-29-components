import { createHtmlElement } from "./functions.js";

export function newsItem(){
const newsItemElement = createHtmlElement("div", "news-item")
const linkNewsItem = createHtmlElement("a", "", "#")
const imageWrapperElement = createHtmlElement("div", "image-wrapper")
const newsContentElement = createHtmlElement("div", "news-content")
const imageElement = createHtmlElement("img")
const newsCategoryElement = createHtmlElement("span", "news-category")
const newsTitleElement = createHtmlElement("h3", "news-title")
const newsDateElement = createHtmlElement("span", "news-date")

imageElement.src ="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg"
newsCategoryElement.textContent = "AI & deep learning"
newsTitleElement.textContent = "Ar „ChatGPT“ užims mūsų darbo vietas?"
newsDateElement.textContent = "2023-01-27"

newsContentElement.append(newsCategoryElement, newsTitleElement, newsDateElement)
imageWrapperElement.append(imageElement)
linkNewsItem.append(imageWrapperElement, newsContentElement)
newsItemElement.append(linkNewsItem)
return newsItemElement
}