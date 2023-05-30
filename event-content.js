import createHtmlElement from "./functions.js"

export default function eventContent(data) {
    let { eventDay, eventMonth, eventLocation, eventTitle } = data
    const eventContentElement = createHtmlElement("div", "event-content")
    const eventDateElement = createHtmlElement("div", "event-date")
    const eventInfoElement = createHtmlElement("div", "event-info")

    if (!eventTitle) {
        return ""
    }
    const eventTitleElement = createHtmlElement("h3", "event-title")
    eventTitleElement.textContent = eventTitle

    if (eventDay) {
        const eventDayElement = createHtmlElement("span", "event-day")
        eventDayElement.textContent = eventDay
        eventDateElement.append(eventDayElement)
    }
    if (eventMonth) {
        const eventMonthElement = createHtmlElement("span", "event-month")
        eventMonthElement.textContent = eventMonth
        eventDateElement.append(eventMonthElement)
    }
    if (eventLocation) {
        const eventLocationElement = createHtmlElement("span", "event.location")
        eventLocationElement.textContent = eventLocation
        eventInfoElement.append(eventLocationElement)
    }

    eventInfoElement.append(eventTitleElement)
    eventContentElement.append(eventDateElement, eventInfoElement)

    return eventContentElement
}
