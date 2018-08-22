import React from 'react';
import PropTypes from 'prop-types';

import ChatMessageList from '../ChatMessageList/ChatMessageList';

const ChatBody = (props) => {
	return (
		<ChatMessageList {...props}/>
	)
}

ChatBody.propTypes = {
	messages: PropTypes.array.isRequired,
	onEvent: PropTypes.func.isRequired,
}

ChatBody.defaultProps = {
	messages: [],
	onEvent: (e) => {},
}

export default ChatBody;