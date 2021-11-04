import React from 'react';
import {BrowserRouter , Link, Switch, Route, Redirect} from 'react-router-dom';
import '../Aplication.css';
import TryAgain from './tryagain';

class Result extends React.Component {
	constructor() {
		super();
		this.state = {
			comp: true
		};
	}


	handleClick = (e)=> {
			let comp = null;

			if(e.target.className === "green") {
				comp = "1";
				let data = `${localStorage.opc[12]}${localStorage.opc[13]}${localStorage.opc[14]}${comp}`
				fetch(`/api/tasks/${localStorage.data}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body:
							JSON.stringify({choisee:data})
					})


				if(localStorage.res[0] === comp) {
					alert("igual");
				}
				if(localStorage.res[0] !== comp) {
					alert("diferente");
				}
			}
			if(e.target.className === "red") {
				
				comp = "0";
				let data = `${localStorage.opc[12]}${localStorage.opc[13]}${localStorage.opc[14]}${comp}`
				fetch(`/api/tasks/${localStorage.data}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body:
							JSON.stringify({choisee:data})
					})
					if(localStorage.res[0] === comp) {
						alert("igual");
					}
					if(localStorage.res[0] !== comp) {
						alert("diferente");
					}

			}
			this.setState({
				'comp': !this.state.comp
				});

					
	}
	render(){
		if(this.state.comp) {
			return(
				<div className="aplicationcss">
					<h1 className="spa">Ya tengo la prediccion, apreta una vez mas para comprobar</h1>
					<button className="red" onClick={this.handleClick} type="submit"></button>
					<button className="green" onClick={this.handleClick} type="submit"></button>
				</div>
				)
					
		}
		if (!this.state.comp) {

			return (
				<TryAgain/>

				)
		}


	}
}

export default Result;