import buttonLarge from "./button-large.js";
import eventsList from "./events-list.js";
import createHtmlElement from "./functions.js";

export default function eventsWrapper(title, data) {
    const eventsWrapperElement = createHtmlElement("div", "events-wrapper")
    const eventsListElement = eventsList(data)
    if (title) {
        const sectionTitleElement = createHtmlElement("h2", "section-title")
        sectionTitleElement.textContent = title
        eventsWrapperElement.append(sectionTitleElement)
    }
    const linkButtonLarge = buttonLarge("Daugiau", "#")


    eventsWrapperElement.append(eventsListElement, linkButtonLarge)
    return eventsWrapperElement
}