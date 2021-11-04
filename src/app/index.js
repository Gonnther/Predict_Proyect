import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


// class Apñlication extends Component {
// 	render() {
// 		return(
// 			<h1>From React {alert("esto se ve")}</h1>
// 			
// 	}
// }

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
