import React from 'react';

class RemoveBuilding extends React.Component {
	removeUpdate(id){
    this.props.removeUpdate(id);
    }
	render() {
		
		const { data, selectedBuilding } = this.props;
		const buildingRemoved = data
			.filter(directory => {
				return directory.id === selectedBuilding
			})
			.map(directory => {
				return (
					<tr key = {directory.id}>
						<button onClick = {this.removeUpdate.bind(this, directory.id)}>
							<td>Delete</td>
						</button>
					</tr>
				);
			});

		return <div>{buildingRemoved}</div>;
	}
}
export default RemoveBuilding;