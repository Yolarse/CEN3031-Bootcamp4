import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding } = this.props;
		const viewBuilding = data
		.filter(directory => {
			return directory.id === selectedBuilding
		})
		.map(directory => {
			var coordinates = ''; 
			var address = '';
				if(typeof directory.coordinates !== 'undefined'&& !(isNaN(directory.coordinates.latitude) || isNaN(directory.coordinates.longitude))) {
						coordinates = directory.coordinates.latitude + ', ' + directory.coordinates.longitude;
				} 
				else {
					coordinates = 'Not Defined';
				}
				if(typeof directory.address !== 'undefined' && directory.address !== '') {
					address = directory.address;
				} 
				else {
					address = 'Not Defined';
				}
		
			return (
				<tr key={directory.id}>
					<div>
						<p>
							<b>Code: </b>{directory.code}
						</p>
						<p>
							<b>Name: </b>{directory.name}
						</p>
						<p>
							<b>Coordinates: </b>{coordinates}
						</p>
						<p>
							<b>Address: </b>{address}
						</p>
					</div>
				</tr>
			);
		})
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
					<div>{viewBuilding}</div>
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
