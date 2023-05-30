
export default function createHtmlElement(type, className, href) {
    let element = document.createElement(type)
    if (className) {
        element.classList.add(className)
    }
    if (type === "a") {
        element.href = href
    }
    return element
}
