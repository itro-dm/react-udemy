import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.onload = (e) => {

            const height = this.imageRef.current.clientHeight;

            const spans = Math.ceil(height / 10);

            this.setState({ spans });
        }
    }

    render() {
        const { description, urls } = this.props.image;

        const pstyle = {
            gridRowEnd: `span ${this.state.spans}`
        };

        return (
            <div style={pstyle}>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        )
    }
}

export default ImageCard;
