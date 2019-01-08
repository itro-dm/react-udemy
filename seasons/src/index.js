import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = { pos: null, type: '' };

		window.navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({ pos: position.coords.latitude, type: 'Lat: ' })
			},
			err => {
				this.setState({ pos: err.message, type: 'Err: ' });
			}
		);
	}

	render() {

		if (this.state.pos) {
			return (
				<div>
					{this.state.type} {this.state.pos}
				</div>
			);
		} else {
			return <div>Loading!</div>
		}
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);