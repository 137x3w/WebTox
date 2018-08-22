import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import ChatFooter from './ChatFooter';

class ChatFooterContainer extends React.Component {
	constructor(props) {
		super(props);

		this.onFocus = this.onFocus.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onEvent = this.onEvent.bind(this);

		this.state = {
			rows: "1"
		}
	}

	onFocus() {
		this.setState({
			rows: "3"
		});
	}

	onBlur() {
		this.setState({
			rows: "1"
		});
	}

	onSubmit() {}

	onEvent(e) {
		switch(e.action) {
			case "FOCUS":
			this.onFocus();
			break;
			case "BLUR":
			this.onBlur();
			break;
			case "SUBMIT":
			this.onSubmit();
			break;
			default:
			break;
		}
	}

	render() {
		return (
			<ChatFooter
				rows={this.state.rows}
				onEvent={this.onEvent}
			/>
		);
	}
}

ChatFooterContainer.propTypes = {}

ChatFooterContainer.defaultProps = {}

export default ChatFooterContainer;