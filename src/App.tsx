import React from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Home from './Home';
import Code from './Code';
import Photo from './Photo';
import Music from './Music';
import Contact from './Contact';

import './App.scss';


const App = () => (
	<Router>
		<div className="App">
			<nav>
				<Link to="/">
					DAN.<span className='Accent'>MEDIA</span>
				</Link>
				<div>
					<Link to="/code">Code</Link>
					<Link to="/photo">Photo</Link>
					<Link to="/music">Music</Link>
					<Link to="/contact">Contact</Link>
				</div>
			</nav>

			<Switch>
				
				<Route path="/code">
					<Code />
				</Route>
				<Route path="/photo">
					<Photo />
				</Route>
				<Route path="/music">
					<Music />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</div>
	</Router>
);

export default App;