import React from 'react';

class SearchBar extends React.Component {

    state = { inputText: '' };

    onInputChange = (event) => {

        this.setState({ inputText: event.target.value });
    };

    formSubmit = (event) => {
        event.preventDefault();

        this.props.parentApiRequest(this.state.inputText);
    };

    render() {
        return (
            <div className="ui segment search-bar">
                <form onSubmit={this.formSubmit} className="ui form">
                    <div className="field">
                        <label>Video SearchBar</label>
                        <input
                            type="text"
                            value={this.state.inputText}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;