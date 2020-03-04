import React from "react"
import { hydrate } from "react-dom"
import Routes from "./routes.js"
import registerServiceWorker from "./registerServiceWorker"
import "./styles/main.scss"

hydrate(<Routes />, document.getElementById("reactele"))
registerServiceWorker()
