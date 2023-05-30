import createHtmlElement from "./functions.js"
import mainContent from "./main-content.js"
import sidebarContent from "./sidebar-content.js"

const  container = createHtmlElement("div", "container")
const  contentWrapper = createHtmlElement("div", "content-wrapper")
const main = mainContent()
const sidebar = sidebarContent()

contentWrapper.append(main, sidebar)
container.append(contentWrapper)
document.body.prepend(container)