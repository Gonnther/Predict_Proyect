import React from 'react';
import './tryagain.css';
import {BrowserRouter, Link, Switch, Route, Redirect, useHistory} from 'react-router-dom';

class TryAgain extends React.Component {
	render(){
		return(
			<Link to="/">
				<div className="divi">
					<button  className="tryText">TRY AGAIN</button>
				</div>
			</Link>
			)
	}
}
export default TryAgain;