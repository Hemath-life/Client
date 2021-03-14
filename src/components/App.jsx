import React from "react"
import Header from "./Header"
import Note from "./Note"
import CreateArea from "./CreateArea"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<CreateArea />
				<Switch>
					<Route path={"/"} exact component={Note} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
