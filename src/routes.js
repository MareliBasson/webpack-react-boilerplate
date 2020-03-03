import React, { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
// import DefaultLayout from "components/default-layout"
import Default from "./js/components/default/"

function Routes() {
	return (
		<Router>
			{/* <DefaultLayout themed={themeActive}> */}
			<Route exact path="/" component={Default} />
			{/* </DefaultLayout> */}
		</Router>
	)
}

export default Routes
