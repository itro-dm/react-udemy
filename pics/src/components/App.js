import React from 'react';
import unpslash from '../unpslash';
import SearchBar from './SearchBar';

class App extends React.Component {

	state = { images: [] };

	onSearchSubmit = async (term) => {

		 const response = await unpslash.get('/search/photos', {
			params: { query: term },
		});

		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onSubmit={this.onSearchSubmit} />
				Found {this.state.images.length} images
			</div>
		);
	}
}

export default App;