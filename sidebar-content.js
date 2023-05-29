import { eventsWrapper } from "./events-wrapper.js";
import { createHtmlElement } from "./functions.js";
import { podcastsWrapper } from "./podcasts-wrapper.js";

export function sidebarContent() {
    const sidebarElement = createHtmlElement("aside", "sidebar-content")
    const podcastsWrapperElement = podcastsWrapper()
    const eventsWrapperElement = eventsWrapper()

    sidebarElement.append(podcastsWrapperElement, eventsWrapperElement)
eventsWrapperElement
    return sidebarElement
}