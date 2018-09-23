import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '../Avatar/Avatar';

const styles = theme => ({
	grid: {
		wordWrap: "break-word",
		alignItems: "center",
	},

	typography: {
		wordWrap: "break-word"
	},

	timeTypography: {
		minWidth: 6 * theme.spacing.unit,
	},

	listItemActive: {
		background: theme.palette.grey[300]
	}
});

const Contact = (props) => {
	const {
		uid,
		name,
		time,
		message,
		avatar,
		isSelected,
		isDisplayed,
		isTouchDevice,
		onEvent,
		classes,
	} = props;

	return isDisplayed ? (
		<React.Fragment>
			<ListItem
				button
				onMouseDown={isTouchDevice ? null : (() => onEvent({action: "CONTACT_MOUSEDOWN"}))}
				onMouseUp={isTouchDevice ? null : (() => onEvent({action: "CONTACT_MOUSEUP"}))}

				onTouchStart={isTouchDevice ? (() => onEvent({action: "CONTACT_TOUCHSTART"})) : null}
				onTouchEnd={isTouchDevice ? (() => onEvent({action: "CONTACT_TOUCHEND"})) : null}
				onTouchMove={isTouchDevice ? (() => onEvent({action: "CONTACT_TOUCHMOVE"})) : null}
				selected={isSelected}
			>

				<Grid 
					container
					spacing={0} 
					className={classes.grid}
				>
					<Grid xs={10} sm={11} item>
						<ListItem
							disableGutters
						>
							<ListItemAvatar>
								<Avatar 
									status={avatar.status}
									src={avatar.src}
									char={avatar.char}
								/>
							</ListItemAvatar>
							
							<ListItemText>
								<Typography
									variant="subheading"
									noWrap
								>
									{name}
								</Typography>
							</ListItemText>
						</ListItem>
					</Grid>

					<Grid item xs={2} sm={1}>
						<Typography
							variant="caption"
							align="right"
						>
							{time}
						</Typography>
					</Grid>

					<Grid item xs={12}>
						<Typography
							gutterBottom
						>
							{message}
						</Typography>
					</Grid>
				</Grid>

			</ListItem>
		</React.Fragment>
	) : null;
};

Contact.propTypes = {
	uid: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	avatar: PropTypes.object.isRequired,
	isSelected: PropTypes.bool.isRequired,
	isTouchDevice: PropTypes.bool.isRequired,
	onEvent: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
};

Contact.defaultProps = {
	uid: null,
	name: "Default",
	time: (new Date()).toLocaleString("en", {
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	}),
	message: "Default",
	avatar: undefined,
	isSelected: false,
	isTouchDevice: false,
	onEvent: (e) => {},
}

export default withStyles(styles, { withTheme: true })(Contact);