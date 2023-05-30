import { createHtmlElement } from "./functions.js"

export function eventContent(data) {
    let { eventDay, eventMonth, eventLocation, eventTitle } = data
    
    const eventContentElement = createHtmlElement("div", "event-content")
    const eventDateElement = createHtmlElement("div", "event-date")
    const eventInfoElement = createHtmlElement("div", "event-info")

    const eventDayElement = createHtmlElement("span", "event-day")
    const eventMonthElement = createHtmlElement("span", "event-month")
    const eventLocationElement = createHtmlElement("span", "event.location")
    const eventTitleElement = createHtmlElement("h3", "event-title")

    eventDayElement.textContent = eventDay
    eventMonthElement.textContent = eventMonth
    eventLocationElement.textContent = eventLocation
    eventTitleElement.textContent = eventTitle

    eventDateElement.append(eventDayElement, eventMonthElement)
    eventInfoElement.append(eventLocationElement, eventTitleElement)
    eventContentElement.append(eventDateElement, eventInfoElement)

    return eventContentElement
}
