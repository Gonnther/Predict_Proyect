import React from 'react';
import {BrowserRouter , Link, Switch, Route} from 'react-router-dom';
import '../AppRouter.css';

function Home() {

		return (
			
				<div className="Content">
					<div className="text">Proyecto</div>
					<div className="text">Proximo Proyecto</div>
					<Link to="/project" className="box1"></Link>
					<div className="text"></div>
					<Link to="/next" className="box2"></Link>
				</div>

			)
}

export default Home;