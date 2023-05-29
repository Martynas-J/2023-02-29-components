import { createHtmlElement } from "./functions.js";
import { podcastsWrapperInside } from "./podcasts-wrapper-inside.js";

export function podcastsWrapper() {
const podcastsWrapperElement = createHtmlElement("div", "podcasts-wrapper")
const sectionTitleElement = createHtmlElement("h2", "section-title")
const podcastsWrapperElement2 = podcastsWrapperInside()

sectionTitleElement.textContent = "Podcastai"

podcastsWrapperElement.append(sectionTitleElement, podcastsWrapperElement2)
return podcastsWrapperElement
}