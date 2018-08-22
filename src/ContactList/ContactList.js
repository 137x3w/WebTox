import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import CardHeader from '@material-ui/core/CardHeader';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ReplyIcon from '@material-ui/icons/Reply';
import DeleteIcon from '@material-ui/icons/Delete';
import ForwardIcon from '@material-ui/icons/Forward';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Avatar from '../Avatar/Avatar';

const styles = theme => ({
	inheritWidth: {
		width: "inherit",
	},

	zeroMinWidth: {
		minWidth: 0,
	},

	cardHeaderRoot: {
		flexGrow: 1,
		paddingLeft: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
	},
});

const ContactList = (props) => {
	const {
		active,
		avatar,
		title,
		subheader,
		menuAnchor,
		onEvent,
		classes
	} = props;

	return (
		<React.Fragment>

		</React.Fragment>
	);
}

ContactList.propTypes = {
	avatar: PropTypes.object,
	active: PropTypes.bool.isRequired,
	onEvent: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	subheader: PropTypes.string.isRequired,
	classes: PropTypes.object.isRequired,
};

ContactList.defaultProps = {
	avatar: null,
	active: false,
	onEvent: (e) => {},
	title: "Default",
	subheader: "Default",
}

export default withStyles(styles, { withTheme: true })(ContactList);