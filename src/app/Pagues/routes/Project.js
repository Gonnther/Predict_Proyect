import React from 'react';
import {BrowserRouter , Link, Switch, Route} from 'react-router-dom';
import Aplication from '../Aplication';
import Cargando from './cargando';

class Project extends React.Component {
	render() {
		return (
			<div>
			<Switch>
			<Route exact path="/" component={Home}/>
			</Switch>
			</div>

			)
	}
}
export default Project;