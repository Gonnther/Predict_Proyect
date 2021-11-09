import React from 'react';
import {BrowserRouter , Link, Switch, Route} from 'react-router-dom';
import Aplication from '../Aplication';
import Cargando from './cargando';
import Rate from './rate';

class Project extends React.Component {
	render() {
		return (
			<div>
			<Switch>
			<Route exact path="/" component={Home}/>
			</Switch>
			<Rate/>
			</div>

			)
	}
}
export default Project;