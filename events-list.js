import { EVENTS_DATA } from "./config.js";
import { event } from "./event.js";
import { createHtmlElement } from "./functions.js";

export function eventsList() {
    const eventsListElement = createHtmlElement("div", "events-list")
    EVENTS_DATA.forEach(element => {
        eventsListElement.append(event(element))
    });
    return eventsListElement
}