import createHtmlElement from "./functions.js"

export default function podcast(data) {
    let { podcastImageSrc, podcastLength, podcastTitle, podcastDate} = data
    const podcastElement = createHtmlElement("div", "podcast")
    const podcastControlsElement = createHtmlElement("div", "podcast-controls")
    const podcastContentElement = createHtmlElement("div", "podcast-content")
    const podcastImageElement = createHtmlElement("img", "podcast-image")
    const podcastLengthElement = createHtmlElement("span", "podcast-length")
    const podcastPlayElement = createHtmlElement("button", "podcast-play")
    const podcastTitleElement = createHtmlElement("h3", "podcast-title")
    const podcastDateElement = createHtmlElement("h3", "podcast-date")

    podcastImageElement.src = podcastImageSrc
    podcastLengthElement.textContent = podcastLength
    podcastPlayElement.textContent = "Play"

    podcastTitleElement.textContent = podcastTitle
    podcastDateElement.textContent = podcastDate


    podcastControlsElement.append(podcastImageElement, podcastLengthElement, podcastPlayElement)
    podcastContentElement.append(podcastTitleElement, podcastDateElement)
    podcastElement.append(podcastControlsElement, podcastContentElement)
    return podcastElement
}
