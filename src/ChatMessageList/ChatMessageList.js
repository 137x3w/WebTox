import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import ChatMessageContainer from '../ChatMessage/ChatMessageContainer';

const styles = theme => ({
	root: {
		flex: "1 100 auto",
		overflow: "auto",
	},

	list: {
		paddingLeft: theme.spacing.unit * 3,
		paddingRight: theme.spacing.unit * 3,
	},

	listRoot: {
		padding: 0,
	}
});

const ChatMessageList = (props) => {
	const {
		messages,
		onEvent,
		classes,
	} = props;

	return (
		<div
			className={classes.root}
		>
			<List 
				className={classes.list}
				classes={{
					root: classes.listRoot
				}}
			>
				{messages.map((message) => (
					<ChatMessageContainer 
						{...message} 
						onEvent={onEvent} 
					/>
				))}
			</List>
		</div>
	);
}

ChatMessageList.propTypes = {
	messages: PropTypes.array.isRequired,
	onEvent: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
}

ChatMessageList.defaultProps = {
	messages: [],
	onEvent: (e) => {},
}

export default withStyles(styles, { withTheme: true })(ChatMessageList);