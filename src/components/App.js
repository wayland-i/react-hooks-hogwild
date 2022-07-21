import React from "react";
import Nav from "./Nav";
import Container from "./Container";

import hogs from "../porkers_data";

function App() {
	// console.log(hogs)
	return (
		<div className="App">
			<Nav />
			<Container hogs={hogs}/>
		</div>
	);
}

export default App;
