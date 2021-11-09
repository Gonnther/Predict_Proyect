import React from 'react';
import {BrowserRouter , Link, Switch, Route} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Aplication from './Aplication';
import Cargando from './routes/Cargando';
import Result from './routes/result';
import Rate from './routes/rate';
import TryAgain from './routes/tryagain';
import './AppRouter.css';

class AppRoutes extends React.Component {
	render() {
		return (
			<BrowserRouter basename="/">
				<div className="Nav">
					<script src="https://unpkg.com/brain.js"></script>
					<Link to="/" className="Link"><div className="Home">HOME</div></Link>
					<Link to="/about" className="Link"><div className="About">ABOUT</div></Link>
				</div>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/about" component={About}/>
					<Route exact path="/project" component={Aplication}/>
					<Route exact path="/Cargando" component={Cargando}/>
					<Route exact path="/Result" component={Result}/>
				</Switch>
			</BrowserRouter>
				)
	}
}
export default AppRoutes