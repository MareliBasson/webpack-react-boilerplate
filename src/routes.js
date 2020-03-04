import React, { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
// import DefaultLayout from "components/default-layout"
// import Default from "./js/components/default/"
import App from "./js/components/app"

function Routes() {
	return (
		<Router>
			{/* <DefaultLayout themed={themeActive}> */}
			<Route exact path="/" component={App} />
			{/* </DefaultLayout> */}
		</Router>
	)
}

export default Routes
