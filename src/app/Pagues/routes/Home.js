import React from 'react';
import {BrowserRouter , Link, Switch, Route} from 'react-router-dom';
import '../AppRouter.css';
import Rate from './rate';

function Home() {
	return (
		<div>
			<div className="Content">
				<div className="text">PROYECTO</div>
				<div className="text">PROXIMO<br/>PROYECTO</div>
				<Link to="/project" className="box1"></Link>
				<div className="text"></div>
				<Link to="/next" className="box2"></Link>
			</div>
		<Rate/>
		</div>
		)
}
export default Home;