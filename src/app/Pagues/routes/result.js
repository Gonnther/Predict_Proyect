import React from 'react';
import {BrowserRouter , Link, Switch, Route, Redirect} from 'react-router-dom';
import '../Aplication.css';
import Color from './color';
import TryAgain from './tryagain';
import Rate from './rate';

class Result extends React.Component {
	componentDidMount() {
		const URI_Suc = "/api/success";
		let success = null;
		this.succ = async function succ() {
			try {
			 	success = await(await fetch(URI_Suc)).json();
					} catch(e) {
						console.log('error no success');
					}
			localStorage['acierto'] = success[0].acierto;
			localStorage['fallo'] = success[0].fallo;
		}
		this.succ();
	}	
	constructor() {
		super();
		this.html = React.createRef()
		this.state = {
			comp: true,
			show: true
		};
	}
	handleClickShow = (e) => this.html.current.innerHTML = <Color/>
	handleClick = (e)=> {
		let URI = "/api/tasks/";
		const URI_Suc = "/api/success/61881d151fd42c2cfd7a4a39";
		// const ids = "";
		let comp = null;
		let localAcierto = Number(localStorage['acierto']);
		let localFallo = Number(localStorage['fallo']);
			if(e.target.className === "green") {
				comp = "1";
				let data = `${localStorage.opc[12]}${localStorage.opc[13]}${localStorage.opc[14]}${comp}`
				fetch(`${URI}${localStorage.data}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body:
							JSON.stringify({choisee:data})
					})
				if(localStorage.res[0] === comp) {
					alert("igual");
					fetch(`${URI_Suc}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body:
							JSON.stringify({acierto:localAcierto+1})
					})
				}
				if(localStorage.res[0] !== comp) {
					alert("diferente");
					fetch(`${URI_Suc}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body:
							JSON.stringify({fallo:localFallo+1})
					})
				}
			}
			if(e.target.className === "red") {
				comp = "0";
				let data = `${localStorage.opc[12]}${localStorage.opc[13]}${localStorage.opc[14]}${comp}`
				fetch(`${URI}${localStorage.data}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body:
							JSON.stringify({choisee:data})
					})
					if(localStorage.res[0] === comp) {
					alert("igual");
					fetch(`${URI_Suc}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body:
							JSON.stringify({acierto:localAcierto+1})
					})
					}
					if(localStorage.res[0] !== comp) {
					alert("diferente");
					fetch(`${URI_Suc}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body:
							JSON.stringify({fallo:localFallo+1})
					})
					}
		}
			this.setState({
				'comp': !this.state.comp
				});
	}
	render(){
		if(this.state.comp) {
			return(
				<div>
				<div className="aplicationcss">
					<h1 className="spa">Ya tengo la prediccion, apreta una vez mas para comparar</h1>
					<button className="red" onClick={this.handleClick} type="submit"></button>
					<button className="green" onClick={this.handleClick} type="submit"></button>
				</div>
				<Rate/>
				</div>
				)
		}
		if (!this.state.comp) {
			return (
				<div>
					<h1 className="spa">Mi prediccion</h1>
					<Color/>
					<TryAgain/>
					<Rate/>
				</div>
			)
		}
	}
}
export default Result;