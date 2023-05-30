import createHtmlElement from "./functions.js";
import podcastsWrapperInside from "./podcasts-wrapper-inside.js";

export default function podcastsWrapper(title, data) {
    const podcastsWrapperElement = createHtmlElement("div", "podcasts-wrapper")
    if (title) {
        const sectionTitleElement = createHtmlElement("h2", "section-title")
        sectionTitleElement.textContent = title
        podcastsWrapperElement.append(sectionTitleElement)
    }

    const podcastsWrapperElement2 = podcastsWrapperInside(data)

    podcastsWrapperElement.append( podcastsWrapperElement2)
    return podcastsWrapperElement
}