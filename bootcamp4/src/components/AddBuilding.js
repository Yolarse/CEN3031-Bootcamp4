import React from 'react';

class AddBuilding extends React.Component {
	addUpdate() {
		const code = this.code.value
		const name = this.name.value
		const latitude = this.latitude.value
		const longitude = this.longitude.value
		const address = this.address.value
		//console.log("Added")
		this.props.addUpdate(code, name, latitude, longitude, address);
	}
	render() {
		const { addUpdate } = this.props;
		return (
			
			<div>
				<h2>Add New Building Here</h2>
				<form>
					<input type="text" ref={ (code) => {this.code = code}  } placeholder="Code" />	
				</form>
				
				<form>
					<input type="text" ref={ (name) => {this.name = name}  } placeholder="Name" />
				</form>
				
				<form>
					<input type="text" ref={ (latitude) => {this.latitude = latitude}  } placeholder="Latitude" />	
				</form>
				
				<form>
					<input type="text" ref={ (longitude) => {this.longitude = longitude}  } placeholder="Longitude" />
				</form>
				
				<form>
					<input type="text" ref={ (address) => {this.address = address}  } placeholder="Address" />
				</form>
				<button onClick = {this.addUpdate.bind(this)}>
					<td>Add</td>
				</button>
			</div>
		);
	}
}
export default AddBuilding;