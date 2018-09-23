import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import ContactContainer from '../Contact/ContactContainer';

const styles = theme => ({
	list: {
		padding: 0,
	},

	listRoot: {
		
	}
});

const ContactList = (props) => {
	const {
		contacts,
		onEvent,
		classes
	} = props;

	return (
		<React.Fragment>
			<List 
				className={classes.list}
				classes={{
					root: classes.listRoot
				}}
			>
				{
					Object.keys(contacts).map((key) => (
						<ContactContainer 
							{...contacts[key]} 
							onEvent={onEvent} 
						/>
					))
				}
			</List>
		</React.Fragment>
	);
}

ContactList.propTypes = {
	contacts: PropTypes.object.isRequired,
	onEvent: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
};

ContactList.defaultProps = {
	contacts: [],
	onEvent: (e) => {},
}

export default withStyles(styles, { withTheme: true })(ContactList);