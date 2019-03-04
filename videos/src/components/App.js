import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList  from './VideoList';


class App extends React.Component {

    state = { videos: [] };

    onTermSubmit = async (query) => {

        const youtubeResponse = await youtube.get('/search', {
            params: {
                q: query
            }
        });


        this.setState({ videos: youtubeResponse.data.items });

    };


    render() {
        return (
            <div className="ui container">
                <SearchBar parentApiRequest={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App;