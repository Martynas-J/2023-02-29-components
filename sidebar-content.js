import eventsWrapper from "./events-wrapper.js";
import createHtmlElement from "./functions.js";
import podcastsWrapper from "./podcasts-wrapper.js";

export default function sidebarContent() {
    const sidebarElement = createHtmlElement("aside", "sidebar-content")
    const podcastsWrapperElement = podcastsWrapper("Podcastai")
    const eventsWrapperElement = eventsWrapper("Renginiai")

    sidebarElement.append(podcastsWrapperElement, eventsWrapperElement)
    eventsWrapperElement
    return sidebarElement
}