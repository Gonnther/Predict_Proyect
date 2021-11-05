import React from 'react';
import style from './Aplication.css';
import {BrowserRouter , Link, Switch, Route} from 'react-router-dom';
// import Cargando from './routes/Cargando';
// import App from './App';


let time = Date.now(0);
let timer = null;

class Aplication extends React.Component {

	constructor() {
		super();
		this.state = {
			choisee: '',
			timebtwn: ''
		};
		// this.handleClick = this.handleClick.bind(this);
		// this.addTask = this.Task.bind(this);
	}
	

	componentDidMount() {

		this.time = Date.now(0);
		this.x = [];
		this.y = [];
		this.z = 0;
		this.addTask = ()=> {
			if(this.x.length === 3) {
					

					const response = fetch("/api/tasks", {
						method: 'POST',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(this.state)
					}) .then(res => res.json())
					.then(data => localStorage['data'] = data)
					

				var opc = this.state;
				localStorage['opc'] = JSON.stringify(this.state);
				this.props.history.push('./Cargando');
				
			}
		}
	
	}
	handleClick = (e)=> {
		this.z++;
		//catch x
		if(this.x.length <= 2) {
			if(e.target.className === "green") {
				this.x += "1";
			}
			if(e.target.className === "red") {
				this.x += "0";
			}
		}
		//catch time
		if (this.z === 1) {
			timer = Date.now(0);
			timer = timer - this.time;
			this.y[0] = timer/1000;
			time = Date.now(0);
		}
		if (this.z === 2) {
			timer = Date.now(0);
			timer = timer - time;
			this.y[1] = timer/1000;
			time = Date.now(0)
		}
		if (this.z === 3) {
			timer = Date.now(0);
			timer = timer - time;
			this.y[2] = timer/1000;
			time = null;
			this.x = String(this.x);
			this.y = String(this.y);
			this.setState({
				'choisee': this.x,
				'timebtwn': this.y
				});
			setTimeout(this.addTask, 100);
			
			
		}

	}
	

	render() {
		return(
				<div className="aplicationcss">{this.addTask}
				<h1 className="spa">Predictor</h1>
				<button className="red" onClick={this.handleClick} type="submit"></button>
				<button className="green" onClick={this.handleClick} type="submit"></button>
				</div>

			)
	}
}
export default Aplication;