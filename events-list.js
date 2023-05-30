
import event from "./event.js";
import createHtmlElement from "./functions.js";

export default function eventsList(data) {
    const eventsListElement = createHtmlElement("div", "events-list")
    data.forEach(element => {
        eventsListElement.append(event(element))
    });
    return eventsListElement
}