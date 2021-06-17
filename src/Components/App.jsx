import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../index.css";
import About from "./About/index";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Home from "./HomeComp/Home";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/signup" component={Signup} />
					<Route path="/login" component={Login} />
					<Route path="/contact" component={Contact} />
					<Route path="/about" component={About} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
