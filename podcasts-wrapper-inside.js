
import createHtmlElement from "./functions.js";
import podcast from "./podcast.js";

export default function podcastsWrapperInside(data) {
const podcastsWrapperInsideElement = createHtmlElement("div", "podcasts-wrapper")
data.forEach(element => {
    const podcastElement = podcast(element)
    podcastsWrapperInsideElement.append(podcastElement)
});
return podcastsWrapperInsideElement
}