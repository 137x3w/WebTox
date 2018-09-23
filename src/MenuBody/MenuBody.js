import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ContactsIcon from '@material-ui/icons/Contacts';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

import Avatar from '../Avatar/Avatar';

const styles = theme => ({
});

const MenuBody = (props) => {
	const { 
		classes,
		onEvent,
	} = props;

	return (
		<div>
			<List>
				<ListItem 
					button
					onClick={(e) => onEvent({action: "CONTACTS"})}
				>
					<ListItemIcon>
						<ContactsIcon />
					</ListItemIcon>
					<ListItemText primary="Contacts" />
				</ListItem>
				<ListItem 
					button
					onClick={(e) => onEvent({action: "SETTINGS"})}
				>
					<ListItemIcon>
						<SettingsRoundedIcon />
					</ListItemIcon>
					<ListItemText primary="Settings" />
				</ListItem>
			</List>
		</div>
	);
}

MenuBody.propTypes = {
	onEvent: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
};

MenuBody.defaultProps = {
	onEvent: (e) => {},
}

export default withStyles(styles, { withTheme: true })(MenuBody);