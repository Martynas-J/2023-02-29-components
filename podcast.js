import createHtmlElement from "./functions.js"

export default function podcast(data) {
    let { podcastImageSrc, podcastLength, podcastTitle, podcastDate } = data
    const podcastElement = createHtmlElement("div", "podcast")

    if (podcastTitle && podcastImageSrc) {
        const podcastControlsElement = createHtmlElement("div", "podcast-controls")
        const podcastContentElement = createHtmlElement("div", "podcast-content")
        const podcastImageElement = createHtmlElement("img", "podcast-image")
        const podcastPlayElement = createHtmlElement("button", "podcast-play")
        const podcastTitleElement = createHtmlElement("h3", "podcast-title")
        
        podcastImageElement.src = podcastImageSrc
        podcastPlayElement.textContent = "Play"
        
        podcastTitleElement.textContent = podcastTitle
        
        podcastControlsElement.append(podcastImageElement)
        if (podcastLength) {
            const podcastLengthElement = createHtmlElement("span", "podcast-length")
            podcastLengthElement.textContent = podcastLength
            podcastControlsElement.append(podcastLengthElement)
        }
        podcastControlsElement.append(podcastPlayElement)
        podcastContentElement.append(podcastTitleElement)
        if (podcastDate) {
            const podcastDateElement = createHtmlElement("h3", "podcast-date")
            podcastDateElement.textContent = podcastDate
            podcastContentElement.append(podcastDateElement)
        }
        podcastElement.append(podcastControlsElement, podcastContentElement)

    }
    return podcastElement
}
