import React from 'react';
import {BrowserRouter , Link, Switch, Route} from 'react-router-dom';
import './about.css';

class About extends React.Component {
	render() {
		return (
			<div className="content">
				<br/>
				<div className="h1 t1">THIS PROJECT</div><br/>
				<div className="h2 r1">Using the application I send and stored data in MongoDB, after that, process it with Brain Js and get <br/>a result that becomes... Green or Red</div><br/>
				<div className="h1 t2">TOOLS</div><br/>
				<div className="h2 r2">Brain.js<br/>MongoDB<br/>HTML,CSS and JS<br/>React<br/>Express<br/>Heroku<br/>Node</div><br/>
				<div className="h1 t3">OBJECTIVE</div><br/>
				<div className="h2 r3">Neural Networks are amazing!, and I want this example to speak for itself, my goal with this project <br/>is to gain experience about integrating the Back-end with the Front-end, but also to achieve that the <br/>success rate of the application is high</div><br/>
				<div className="h1 t4">CONTACT</div><br/>
				<div className="cont">
				<a href="https://github.com/Gonnther" className="h2"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="git"/>Gonnther</a>
				<br/>
				<a href="https://linkedin.com/mwlite/in/gonzalo-pintos-329a52217" className="h2"><img src="https://img.icons8.com/ios-glyphs/452/linkedin.png" className="lin"/>Gonzalo Pintos</a>
				</div>
			</div>



		
			)
	}
}
export default About;