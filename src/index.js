import React from "react"
import ReactDOM from "react-dom"
import Routes from "./routes.js"
import registerServiceWorker from "./registerServiceWorker"
import "./styles/main.scss"

ReactDOM.render(<Routes />, document.getElementById("root"))
registerServiceWorker()
