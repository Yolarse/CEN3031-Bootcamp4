import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import RemoveBuilding from './components/RemoveBuilding';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      selectedBuilding: 0,
	  dataUpdate: this.props.data
    }
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
	this.setState({
		filterText: value
	})
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
	this.setState({
		selectedBuilding: id
	})
  }

	removeUpdate(id) {
		this.setState({
			dataUpdate: this.state.dataUpdate
			.filter(directory => {
				return directory.id !== id
			})
		})
	}
	
	addUpdate(code, name, latitude, longitude, address) {
		const id = this.state.dataUpdate.length + 1
		const building = {
			id: id,
			code: code,
			name: name,
			coordinates: {latitude: parseFloat(latitude),
			longitude: parseFloat(longitude)},
			address: address
		}
		this.setState({
			dataUpdate: this.state.dataUpdate.concat(building)
		})
	}

  render() {
    //console.log('memes', this.state.filterText)
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
			filterText={this.state.filterText}
			filterUpdate={this.filterUpdate.bind(this)}
		/>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.dataUpdate}
					filterText={this.state.filterText}
					selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
				selectedBuilding={this.state.selectedBuilding}
				data={this.state.dataUpdate}
			  />
			  <RemoveBuilding
				data={this.state.dataUpdate}
				selectedBuilding={this.state.selectedBuilding}
				removeUpdate={this.removeUpdate.bind(this)}
			  />
			  <AddBuilding
				addUpdate={this.addUpdate.bind(this)}
			  />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
