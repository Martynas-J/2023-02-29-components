import eventsWrapper from "./events-wrapper.js";
import createHtmlElement from "./functions.js";
import podcastsWrapper from "./podcasts-wrapper.js";

export default function sidebarContent(podcastData, eventsData) {
    const sidebarElement = createHtmlElement("aside", "sidebar-content")
    const podcastsWrapperElement = podcastsWrapper("Podcastai", podcastData)
    const eventsWrapperElement = eventsWrapper("Renginiai", eventsData)

    sidebarElement.append(podcastsWrapperElement, eventsWrapperElement)
    eventsWrapperElement
    return sidebarElement
}