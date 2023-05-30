import { ALL_DATA } from "./config.js"
import createHtmlElement from "./functions.js"
import mainContent from "./main-content.js"
import sidebarContent from "./sidebar-content.js"

const  container = createHtmlElement("div", "container")
const  contentWrapper = createHtmlElement("div", "content-wrapper")
const main = mainContent(ALL_DATA.mainNewsData, ALL_DATA.secondaryNewsData)
const sidebar = sidebarContent(ALL_DATA.podcastData, ALL_DATA.eventsData)

contentWrapper.append(main, sidebar)
container.append(contentWrapper)
document.body.prepend(container)