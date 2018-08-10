import React from 'react';

const Feature = (props) => {
	return (
		<div>
			<img className="feature-image" src={props.featureImage} alt={props.featureTitle} />
			<h2>{props.featureTitle}</h2>
			<p>{props.featureBody}</p>
		</div>
	);
};

export default Feature;