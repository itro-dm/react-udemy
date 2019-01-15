import React from 'react';

const seasonConfig = {
	summer: {
		text: 'Lets hit the beach',
		iconClass: 'sun'
	},
	winter: {
		text: 'Burr, it is chilly',
		iconClass: 'snowflake'
	}
};

const getSeason = (lat, month) => {
	if (month < 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = (props) => {

	const season = getSeason(props.lat, new Date().getMonth());
	const {text, iconClass} = seasonConfig[season];

	return (
		<div>
			<i className={`${iconClass} icon`} />
			<h1>{text}</h1>
			<i className={`${iconClass} icon`} />
		</div>
	)
};

export default SeasonDisplay;
