import React from 'react';
import unpslash from '../api/unpslash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

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
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;