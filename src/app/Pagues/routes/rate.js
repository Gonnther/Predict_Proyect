import React from 'react';

class Rate extends React.Component {

	constructor() {
		super();
		this.state = {

		};
	}

	handleClick = (e)=> {
		if(!this.state.show) {
			style.display = "none"
		}
	}					
	

						
	
	render(){
		return(
			<div className="aplicationcss" style={style}>
				<h1 className="rate"></h1>
				<button className="red" onClick={this.handleClick} type="submit"></button>
			</div>
			)
	}
}

export default Rate;