import React, { Component } from 'react';
import Feature from './Feature';

export default class Features extends Component {
	state = {
		features: []
	};

	componentWillMount = () => {
		try {
			fetch(process.env.REACT_APP_D8_API_ADDRESS) // lives in .env -- had to enable CORS in services.yml in D8
				.then(results => {
					return results.json();
				}).then(data => {
					let features = data.map((feature, index) => {
						return(
							<div className="feature-block" key={index}>
								<Feature featureTitle={feature.title} featureBody={feature.field_feature_body} featureImage={feature.field_feature_image_uri} />
							</div>
						);
					})
					this.setState({features: features});
				})
		}
		catch (e) {
			//bad JSON?
		}
	};

	render() {
		return (
			<div className="feature-container">
				{this.state.features}
			</div>
		);
	}
}
