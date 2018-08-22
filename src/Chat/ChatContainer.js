import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Chat from './Chat';

class ChatContainer extends React.Component {
	constructor() {
		super();

		this.onMsgClick = this.onMsgClick.bind(this);
		this.onEvent = this.onEvent.bind(this);

		this._selectedMessages = {};

		this.state = {
			header: {
				avatar: {
					src: undefined,
					char: undefined,
					status: "offline",
				},
				active: false,
				title: "TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
				subheader: "TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
			},
			body: {
				messages: [
					{
						uid: "0",
						name: "A",
						time: "15 min",
						message: "A messageTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
					},
					{
						uid: "1",
						name: "B",
						time: "15 min",
						message: "B message",
					},
					{
						uid: "2",
						name: "C",
						time: "15 min",
						message: "C message",
					},
					{
						uid: "3",
						name: "D",
						time: "15 min",
						message: "D message",
					},
					{
						uid: "4",
						name: "D",
						time: "15 min",
						message: "D message",
					},
					{
						uid: "5",
						name: "D",
						time: "15 min",
						message: "D message",
					},
					{
						uid: "6",
						name: "D",
						time: "15 min",
						message: "D message",
					},
					{
						uid: "7",
						name: "D",
						time: "15 min",
						message: "D message",
					},
				],
			},
			footer: {},
			onEvent: this.onEvent,
		}

		this.state.body.messages.map((message) => {
			return message.key = message.uid;
		});
	}

	onMsgClick(uid) {
		this._selectedMessages[uid] ? delete this._selectedMessages[uid] : this._selectedMessages[uid] = true;
		let active = Boolean(Object.keys(this._selectedMessages).length);
		this.setState((prevState) => {
			return {
				header: {
					...prevState.header,
					active: active,
				}
			}
		});
	}

	onEvent(e) {
		switch(e.action) {
			case "MSG_CLICK":
			this.onMsgClick(e.payload.uid);
			break;
			default: break;
		}
	}

	render() {
		return (
			<Chat {...this.state} />
		);
	}
}

ChatContainer.propTypes = {}

export default ChatContainer;