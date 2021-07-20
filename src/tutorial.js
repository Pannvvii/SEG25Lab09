import React, { Component } from "react";
import { Form } from "react-bootstrap";




const Tutorial = () => {
	const newtut = "Here is how to install mods using new manager";
	const oldtut = "Here is how to install mods using old manager";
	const currtut = newtut;
	const handleChange = (val) =>{
			if (val == "1"){
				currtut = newtut;
			} else if (val == "2"){
				currtut = oldtut;
			}
			
		}
	
	
	return (
		<div className="tutorial">
	
		<h2><r>What games are you modding?</r></h2>
			<input type="checkbox" name="skyrim" value="1"/>Skyrim<br/>
			<input type="checkbox" name="fallout" value="2"/>Fallout<br/>
			<input type="checkbox" name="mh" value="3"/>Monster Hunter<br/>
			<br/>
			<h2> Select a mod manager: </h2>
			
			<Form.Control as="select" custom onChange={() =>handleChange(this)}>
				<option value="1" >Old Manager</option>
				<option value="2" selected="selected">New Manager</option>
			</Form.Control>
			<br/>
			<br/>
			<h2> Your Personal Tutorial: </h2>
				{currtut}
		</div>
	);
}

export default Tutorial;