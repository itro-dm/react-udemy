// Import
import React from 'react';
import ReactDOM from 'react-dom';

// Create
const App = () => {
	const btnTxt = ['Hi', ' there'];
	const btnTxt1 = {text: 'Hi there'};
	const labelTxt = 'Enter name';
	const style = {backgroundColor: 'blue', color: 'white'};

	return (
		<div>
			<label className="label" htmlFor="name">{labelTxt}</label>
			<input id="name" type="text"/>
			<button style={{backgroundColor: 'blue', color: 'white'}}>{btnTxt}</button>
			<button style={style}>{btnTxt1.text}</button>
		</div>
	);
};


// Take the component and show
ReactDOM.render(
	<App/>,
	document.querySelector('#root')
);