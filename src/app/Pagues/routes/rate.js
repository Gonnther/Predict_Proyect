import React from 'react';
import './rate.css';

class Rate extends React.Component {
	constructor() {
		super()
		this.html = React.createRef();
	}
	componentDidMount() {
		let successPut = null;
		const URI_get = "/api/success/";
		const ids = "61881d151fd42c2cfd7a4a39";

		this.succ = async function suc() {
				try {
					successPut = await(await fetch(`${URI_get}${ids}`)).json();
				} catch(e) {
					console.log('error');
				}
			let w = Number(successPut.acierto);
			let z = Number(successPut.fallo);
			let x = (z + w) / 100;
			let rate = w/x;
			rate = rate.toFixed(3);
			this.html.current.title = `${rate}% | ${w}/${z+w}`;
			let deg = ((180*rate)/100) - 126 ;
			localStorage['deg'] = deg;
			this.html.current.bg = `linear-gradient(${localStorage.deg}deg, rgba(40,214,214,1) 0%,rgba(100,255,140,1) 50%,rgba(255,8,8,0.3) 50%, rgba(247,40,240,0.4) 100%)`;
		}
		this.succ()
	}				
	render(){
		return(
			<div className="container">
				<div ref={this.html}className="circular-progress html5" style={{
					background:`linear-gradient(${localStorage.deg}deg, rgba(40,214,214,1) 0%,rgba(100,255,140,1) 50%,rgba(255,8,8,0.3) 50%, rgba(247,40,240,0.4) 100%)`}}></div>
			</div>
			)
	}
}
export default Rate;