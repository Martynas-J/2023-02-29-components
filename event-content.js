import createHtmlElement from "./functions.js"

export default function eventContent(data) {
    let { eventDay, eventMonth, eventLocation, eventTitle } = data
    const eventContentElement = createHtmlElement("div", "event-content")
    const eventDateElement = createHtmlElement("div", "event-date")
    const eventInfoElement = createHtmlElement("div", "event-info")

    if (eventTitle) {
        if (eventDay) {
            const eventDayElement = createHtmlElement("span", "event-day")
            eventDayElement.textContent = eventDay
            eventDateElement.append(eventDayElement)
        }

        const eventMonthElement = createHtmlElement("span", "event-month")
        const eventLocationElement = createHtmlElement("span", "event.location")
        const eventTitleElement = createHtmlElement("h3", "event-title")

        eventMonthElement.textContent = eventMonth
        eventLocationElement.textContent = eventLocation
        eventTitleElement.textContent = eventTitle

        eventDateElement.append(eventMonthElement)
        eventInfoElement.append(eventLocationElement, eventTitleElement)
        eventContentElement.append(eventDateElement, eventInfoElement)
    }


    return eventContentElement
}
