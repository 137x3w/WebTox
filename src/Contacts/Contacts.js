import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import ContactsHeaderContainer from '../ContactsHeader/ContactsHeaderContainer';
import ContactsBody from '../ContactsBody/ContactsBody';

const styles = theme => ({
	root: {
		display: "flex",
		flexFlow: "column",
		height: "100vh",
	},
});

const Contacts = (props) => {
	const {
		header,
		body,
		onEvent,
		classes,
	} = props;

	return (
		<div 
			className={classes.root}
		>
			<ContactsHeaderContainer
				{...header}
				onEvent={onEvent}
			/>
			<ContactsBody 
				{...body}
				onEvent={onEvent}
			/>
		</div>
	);
}

Contacts.propTypes = {
	header: PropTypes.object.isRequired,
	body: PropTypes.object.isRequired,
	onEvent: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
}

Contacts.defaultProps = {
	header: undefined,
	body: undefined,
	onEvent: (e) => {},
}

export default withStyles(styles, { withTheme: true })(Contacts);