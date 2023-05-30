import createHtmlElement from "./functions.js";
import newsWrapper from "./news-wrapper.js"
import videoSectionWrapper from "./video-section-wrapper.js";

export default function mainContent (mainNewsData, secondaryNewsData) {
const main = createHtmlElement("main", "main-content")
main.append(newsWrapper("Naujienos", mainNewsData, secondaryNewsData), videoSectionWrapper("Vaizdo įrašai"))
return main
}