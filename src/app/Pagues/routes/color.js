import React from 'react';
import {BrowserRouter , Link, Switch, Route, Redirect} from 'react-router-dom';

class Color extends React.Component {
	render(){
		if(localStorage.res[0] === "1") {
			return(
				<div  style={{
					height: '30vmin',
					width: '30vmin',
					margin: 'auto',
					background: "linear-gradient(0deg, rgba(40,214,214,1) 0%,rgba(100,255,140,1) 100%"
				}}>
				</div>
				)
		}
		if(localStorage.res[0] === "0") {
			return(
				<div  style={{
					height: '30vmin',
					width: '30vmin',
					margin: 'auto',
					background: "linear-gradient(0deg, rgba(247,40,210,1) 0%, rgba(255,100,100,1) 100%)"
				}}>
				</div>
				)
		}
	}
}

export default Color;