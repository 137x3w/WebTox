import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import _Avatar from '@material-ui/core/Avatar';

const menuBackgroundColor = "#fff";

const styles = theme => ({
	avatarContainer: {
		position: 'relative',
		'&:after': {
			borderRadius: '50%',
			content: "''",
			width: 10,
			height: 10,
			position: 'absolute',
			bottom: 0,
			right: 0,
		},
	},
	offlineConnectionStatus: {
		'&:after': {
			backgroundColor: "transparent",
		}
	},
	onlineConnectionStatus: {
		'&:after': {
			backgroundColor: "#76FF03",
			border: '2px solid' + menuBackgroundColor,
		}
	},
	awayConnectionStatus: {
		'&:after': {
			backgroundColor: "#FFEA00",
			border: '2px solid' + menuBackgroundColor,
		}
	},
	busyConnectionStatus: {
		'&:after': {
			backgroundColor: "#FF3D00",
			border: '2px solid' + menuBackgroundColor,
		}
	},
	defaultAvatar: {
		width: 40,
		height: 40,
	},
	bigAvatar: {
		width: 50,
		height: 50,
	},
});

const Avatar = (props) => {
	const {
		classes,
		status,
		src,
		char,
		size
	} = props;

	return (
		<div className={
			classNames(classes.avatarContainer, 
								 classes[status + 'ConnectionStatus'])
		}>
			<_Avatar
				src={src}
				className={classNames(classes[size + 'Avatar'])}
			>
				{src ? null : char}        
			</_Avatar>
		</div>
	);
}

Avatar.propTypes = {
	classes: PropTypes.object.isRequired,
	src: PropTypes.string.isRequired,
	char: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
	src: "",
	char: "/",
	status: "offline",
	size: "default"
}

export default withStyles(styles, { withTheme: true })(Avatar);