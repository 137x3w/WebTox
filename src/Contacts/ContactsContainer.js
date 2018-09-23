import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Contacts from './Contacts';

class ContactsContainer extends React.Component {
	constructor() {
		super();

		this.onContactSelect = this.onContactSelect.bind(this);
		this.onCancelEdit = this.onCancelEdit.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);

		this._displayAllContacts = this._displayAllContacts.bind(this);

		this.onEvent = this.onEvent.bind(this);

		this._selectedContacts = {};

		this.state = {
			header: {
				isEdit: false,
				title: ""
			},
			body: {
				contacts: {
					"0": {
						uid: "0",
						name: "A",
						time: "15 min",
						message: "A messageTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
						isSelected: false,
						isDisplayed: true,
						avatar: {
							status: "online",
							src: "",
							char: "A",
						}
					},
					"1": {
						uid: "1",
						name: "A",
						time: "15 min",
						message: "A messageTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
						isSelected: false,
						isDisplayed: true,
						avatar: {
							status: "offline",
							src: "",
							char: "",
						}
					},
					"3": {
						uid: "3",
						name: "A",
						time: "15 min",
						message: "A messageTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
						isSelected: false,
						isDisplayed: true,
						avatar: {
							status: "offline",
							src: "",
							char: "",
						}
					},
					"4": {
						uid: "4",
						name: "A",
						time: "15 min",
						message: "A messageTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
						isSelected: false,
						isDisplayed: true,
						avatar: {
							status: "offline",
							src: "",
							char: "",
						}
					},
					"5": {
						uid: "5",
						name: "A",
						time: "15 min",
						message: "A messageTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
						isSelected: false,
						isDisplayed: true,
						avatar: {
							status: "offline",
							src: "",
							char: "",
						}
					},
					"6": {
						uid: "6",
						name: "A",
						time: "15 min",
						message: "A messageTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
						isSelected: false,
						isDisplayed: true,
						avatar: {
							status: "offline",
							src: "",
							char: "",
						}
					},
					"7": {
						uid: "7",
						name: "AmessageTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
						time: "15 min",
						message: "A messageTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
						isSelected: false,
						isDisplayed: true,
						avatar: {
							status: "offline",
							src: "",
							char: "",
						}
					},
				},
			},
			onEvent: this.onEvent,
		}

		Object.keys(this.state.body.contacts)
			  .forEach(key => this.state.body.contacts[key].key = this.state.body.contacts[key].uid);
	}

	onContactSelect(payload) {
		let uid = payload.uid;

		this._selectedContacts[uid] ? delete this._selectedContacts[uid] : this._selectedContacts[uid] = true;

		let selectedCount = Object.keys(this._selectedContacts).length;
		let isSelected = this._selectedContacts[uid] !== undefined;
		let isEdit = Boolean(selectedCount);

		this.setState((prevState) => {
			let state = {
				...prevState,
				header: {
					...prevState.header,
					isEdit: isEdit,
					title: selectedCount.toString()
				}
			}

			state.body.contacts[uid] = {
				...prevState.body.contacts[uid],
				isSelected: isSelected
			};

			return state;
		});
	}

	onCancelEdit() {
		this._selectedContacts = {};
		this.setState((prevState) => {
			let state = {
				...prevState,
				header: {
					...prevState.header,
					isEdit: false,
					title: ""
				}
			}

			Object.keys(state.body.contacts).forEach(key => state.body.contacts[key].isSelected = false)

			return state;
		});
	}

	onSearchChange(payload) {
		var searchQuery = payload.value.toLowerCase();
		this.setState((prevState) => {
			let state = {
				...prevState
			}

			Object.keys(state.body.contacts)
				  .forEach(key => state.body.contacts[key].name.toLowerCase().indexOf(searchQuery) == -1 ? 
								  state.body.contacts[key].isDisplayed = false : 
								  state.body.contacts[key].isDisplayed = true );
			return state;
		});
	}

	_displayAllContacts() {
		this.setState((prevState) => {
			let state = {
				...prevState
			}

			Object.keys(state.body.contacts)
				  .forEach(key => state.body.contacts[key].isDisplayed = true);

			return state;
		});	
	}

	onCancelSearch() {
		this._displayAllContacts();
	}

	onClearSearch() {
		this._displayAllContacts();
	}

	onEvent(e) {
		switch(e.action) {
			case "CONTACT_SELECT":
			this.onContactSelect(e.payload);
			break;

			case "CONTACT_CLICK":
			if(this.state.header.isEdit) {
				this.onContactSelect(e.payload);	
			} else {
				this.props.onEvent(e);
			}
			break;

			case "CANCEL_EDIT":
			this.onCancelEdit();
			break;

			case "SEARCH_CHANGE":
			this.onSearchChange(e.payload);
			break;

			case "CANCEL_SEARCH":
			this.onCancelSearch();
			break;

			case "CLEAR_SEARCH":
			this.onClearSearch();
			break;

			case "DRAWER":
			this.props.onEvent(e);
			break;

			default: 
			break;
		}
	}

	render() {
		return (
			<Contacts {...this.state} />
		);
	}
}

ContactsContainer.propTypes = {
	onEvent: PropTypes.func.isRequired,
}

ContactsContainer.defaultProps = {
	onEvent: (e) => {},
}

export default ContactsContainer;