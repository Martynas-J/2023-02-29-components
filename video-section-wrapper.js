import buttonLarge from "./button-large.js";
import createHtmlElement from "./functions.js";


export default function videoSectionWrapper(title) {
    const videoSection = createHtmlElement("div", "video-section-wrapper")
    const videoWrapperElement = createHtmlElement("div", "video-wrapper") 
    const videoExtraTextElement = createHtmlElement("span", "video-extra-text") 
    const linkButtonLarge = buttonLarge("Visi vaizdo įrašai", "#")
    
    if (title) {
        const sectionTitleElement = createHtmlElement("h2", "section-title") 
        sectionTitleElement.textContent = title
        videoSection.append(sectionTitleElement)
    }
    videoWrapperElement.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/b8dGCsP75HA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>`
    videoExtraTextElement.textContent = "Jei galiu aš – gali ir tu!"

    videoSection.append(videoWrapperElement, videoExtraTextElement, linkButtonLarge)
return videoSection
}
