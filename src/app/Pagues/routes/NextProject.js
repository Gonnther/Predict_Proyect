import React from 'react';
import {BrowserRouter , Link, Switch, Route} from 'react-router-dom';

function NextProject (){
		return (
			<div>
				<BrowserRouter>
					<h1>Proximos Proyectos</h1>
					<h1 className="h1">Coming Soon</h1>
				</BrowserRouter>
			</div>
			)
}
export default NextProject;