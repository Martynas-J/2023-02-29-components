import { PODCAST_DATA } from "./config.js";
import { createHtmlElement } from "./functions.js";
import { podcast } from "./podcast.js";

export function podcastsWrapperInside() {
const podcastsWrapperInsideElement = createHtmlElement("div", "podcasts-wrapper")
PODCAST_DATA.forEach(element => {
    const podcastElement = podcast(element)
    podcastsWrapperInsideElement.append(podcastElement)
});
return podcastsWrapperInsideElement
}