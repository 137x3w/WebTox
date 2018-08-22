import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import ChatHeaderContainer from '../ChatHeader/ChatHeaderContainer';
import ChatBody from '../ChatBody/ChatBody';
import ChatFooterContainer from '../ChatFooter/ChatFooterContainer';

const styles = theme => ({
	root: {
		display: "flex",
		flexFlow: "column",
		height: "100vh",
	},
});

const Chat = (props) => {
	const {
		header,
		body,
		footer,
		onEvent,
		classes,
	} = props;

	return (
		<div 
			className={classes.root}
		>
			<ChatHeaderContainer
				{...header}
				onEvent={onEvent}
			/>
			<ChatBody 
				{...body}
				onEvent={onEvent}
			/>
			<ChatFooterContainer
				{...footer}
				onEvent={onEvent}
			/>
		</div>
	);
}

Chat.propTypes = {
	header: PropTypes.object.isRequired,
	body: PropTypes.object.isRequired,
	footer: PropTypes.object.isRequired,
	onEvent: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
}

Chat.defaultProps = {
	header: undefined,
	body: undefined,
	footer: undefined,
	onEvent: (e) => {},
}

export default withStyles(styles, { withTheme: true })(Chat);