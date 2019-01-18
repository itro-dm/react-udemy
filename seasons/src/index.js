import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {

	state = { pos: null, type: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({pos: position.coords.latitude, type: 'Lat: '}),
			err => this.setState({pos: err.message, type: 'Err: '})
		);
	}

	render() {

		if (this.state.pos) {
			return (
				<SeasonDisplay pos={this.state.pos} mes={this.state.type} />
			);
		} else {
			return <Spinner message="Please accept location request" />;
		}
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
);
