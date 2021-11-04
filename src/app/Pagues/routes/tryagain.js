import React from 'react';
import './tryagain.css';
import {BrowserRouter, Link, Switch, Route, Redirect, useHistory} from 'react-router-dom';

class TryAgain extends React.Component {

	// handleClick = ()=> {
	// 	let history = useHistory()
	// 	history.push("/")
	// }					
	
	render(){
		const res = localStorage.res[0];
		if(res === "1") {
		return(
			<div>

				<h1 className="tryText" >Vuelve a intentarlo!</h1>
				<button className="tryAgain" onClick={this.handleClick} style={{
				height: "10vh",
				width: "100vw",
				background: "rgba(41,214,214)",
				background: "linear-gradient(0deg, rgba(40,214,214,1) 0%, rgba(100,255,140,1) 100%)"

			}}></button>
			</div>
			)
		}
		if(res === "0") {
			return(
				<div>

					<h1 className="tryText" >Vuelve a intentarlo!</h1>
					<button className="tryAgain" onClick={this.handleClick} style={{
					height: "10vh",
					width: "100vw",
					background: "rgba(247,40,210)",
					background: "linear-gradient(0deg, rgba(247,40,210,1) 0%, rgba(255,100,100,1) 100%)"

				}}></button>
				</div>
			)
		}

	}
}

export default TryAgain;