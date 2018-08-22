import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ChatMessage from './ChatMessage';

class ChatMessageContainer extends React.Component {
	constructor(props) {
		super(props);
		
		this.onClick = this.onClick.bind(this);
		this.onEvent = this.onEvent.bind(this);

		this.state = Object.assign({}, props, {
			active: false,
			onEvent: this.onEvent,
		});
	}

	onClick() {
		this.setState((prevState) => {
			return {
				active: !prevState.active
			}
		});
	}

	onEvent(e) {
		switch(e.action) {
			case "MSG_CLICK":
			this.onClick();
			this.props.onEvent(e);
			break;
			default:
			break;
		}
	}

	render() {
		return (
			<ChatMessage {...this.state} />
		);
	}
}

ChatMessageContainer.propTypes = {
	name: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	onEvent: PropTypes.func.isRequired,
}

ChatMessageContainer.defaultProps = {
	name: "Default",
	time: (new Date).toLocaleString("en", {
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	}),
	message: "Default",
	onEvent: (e) => {},
}

export default ChatMessageContainer;