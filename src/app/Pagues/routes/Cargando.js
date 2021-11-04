import React from 'react';
import {BrowserRouter , Link, Switch, Route} from 'react-router-dom';
import '../Aplication.css';


class Cargando extends React.Component {

	componentDidMount() {
		const script = document.createElement("script");
		script.src = "https://unpkg.com/brain.js";
		script.async = true;
		document.body.appendChild(script);
		
		let entrenar = [];
		let obj = null;
		const url = 'http://192.168.1.106:3000/api/tasks';
		let predecir = null;
		let res = null
		this.loader = async function load() {
				try {
					
					
					obj = await(await fetch(url)).json();
				} catch(e) {
					console.log('error');
				}
			
		 	for(let i = 0; i < obj.length; i++) {
		 		if(obj[i].choisee[3] !== undefined) {
			 		entrenar.push(
			 			{
			 				input:
			 					{ op1: obj[i].choisee[0], 
			 					op2: obj[i].choisee[1],
			 					op3: obj[i].choisee[2]
			 			}, output: { op4: obj[i].choisee[3]
			 			}
			 		})
			 	}
		 	}

		 	let network = new brain.NeuralNetwork();
		 	network.train(entrenar);
			let stored = localStorage.opc;
			let entrada = {
				op1: stored[12],
				op2: stored[13],
				op3: stored[14]
			}
			let resultado = network.run(entrada);
			predecir = Object.values(resultado);

			if(predecir > 0.5) {
				res = 1;
			}
			if(predecir < 0.5) {
				res = 0;
			}
			if(predecir != null) {
				localStorage['res'] = res;
				const { history } = this.props;
				history.push('./Result');
			}

		}
		this.loader();
		// this.result = function() {
			
			
		// 	}
		// }
		
		
	}
	render() {
		return(
			<div>
			<script src="https://unpkg.com/brain.js"></script>
				<div className="box2"></div>
			</div>
			)
	}
}

export default Cargando;