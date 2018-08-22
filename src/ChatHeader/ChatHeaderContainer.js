import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ChatHeader from './ChatHeader';

class ChatHeaderContainer extends React.Component {
	constructor(props) {
		super(props);

		this.onExpand = this.onExpand.bind(this);
		this.onCollapse = this.onCollapse.bind(this);
		this.onEvent = this.onEvent.bind(this);

		this.state = {
			menuAnchor: null,
			onEvent: this.onEvent,
		}
	}

	onExpand(e) {
		this.setState((prevState) => {
			return {
				menuAnchor: e.payload.target,
			}
		});
	}

	onCollapse() {		
		this.setState((prevState) => {
			return {
				menuAnchor: null,
			}
		});
	}

	onEvent(e) {
		switch(e.action) {
			case "BACK":
			console.log("Back");
			this.props.onEvent(e);
			break;
			case "DELETE":
			console.log("Delete");
			this.props.onEvent(e);
			break;
			case "REPLY":
			console.log("Reply");
			this.props.onEvent(e);
			break;
			case "FORWARD":
			console.log("Forward");
			this.props.onEvent(e);
			break;
			case "EXPAND":
			console.log("Expand");
			this.onExpand(e);
			break;
			case "COLLAPSE":
			console.log("Collapse");
			this.onCollapse();
			break;
			default: break;
		}
	}

	render() {
		return (
			<ChatHeader {...Object.assign({}, this.props, this.state)} />
		);
	}
}

ChatHeaderContainer.propTypes = {
	active: PropTypes.bool.isRequired,
	avatar: PropTypes.object,
	onEvent: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	subheader: PropTypes.string.isRequired,
}

ChatHeaderContainer.defaultProps = {
	active: false,
	avatar: null,
	onEvent: (e) => {},
	title: "Default",
	subheader: "Default",
}

export default ChatHeaderContainer;