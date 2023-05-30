import eventContent from "./event-content.js";
import createHtmlElement from "./functions.js";

export default function event(data) {
    const eventElement = createHtmlElement("div", "event")
    const eventLink = createHtmlElement("a", "", "#")
    if (data.eventImageElementSrc && data.eventTitle) {
        const imageWrapperElement = createHtmlElement("div", "image-wrapper")
        const eventImageElement = createHtmlElement("img", "event-image")
        eventImageElement.src = data.eventImageElementSrc
        imageWrapperElement.append(eventImageElement)
        eventLink.append(imageWrapperElement)
    }

    const eventContentElement = eventContent(data)

    eventLink.append(eventContentElement)
    eventElement.append(eventLink)
    return eventElement
}