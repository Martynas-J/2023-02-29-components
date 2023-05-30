import { buttonLarge } from "./button-large.js";
import { eventsList } from "./events-list.js";
import { createHtmlElement } from "./functions.js";

export function eventsWrapper() {
    const eventsWrapperElement = createHtmlElement("div", "events-wrapper")
    const sectionTitleElement = createHtmlElement("h2", "section-title")
    const eventsListElement = eventsList()

    sectionTitleElement.textContent = "Renginiai"
    const linkButtonLarge = buttonLarge("Daugiau", "#")

    
    eventsWrapperElement.append(sectionTitleElement, eventsListElement, linkButtonLarge)
    return eventsWrapperElement
}