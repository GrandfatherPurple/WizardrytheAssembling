import React, { Component } from 'react';

// Wraps around components to catch when they throw errors.
class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true});
	}

	render() {
		if (this.state.hasError) {
			return <h1>Ooooops. That is not good.</h1>
		}
		// Children is everything that the ErrorBoundary component wraps around.
		return this.props.children
	}
}

export default ErrorBoundary;