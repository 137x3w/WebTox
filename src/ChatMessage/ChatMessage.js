import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	grid: {
		wordWrap: "break-word",
		alignItems: "center",
	},

	listItemActive: {
		background: theme.palette.grey[300]
	}
});

const ChatMessage = (props) => {
	const {
		uid,
		name,
		time,
		message,
		active,
		onEvent,
		classes,
	} = props;

	return (
		<React.Fragment>
			<ListItem
				className={active ? classes.listItemActive : null}
				onClick={() => onEvent({action: "MSG_CLICK", payload: {uid: uid}})}
			>
				<Grid 
					container
					spacing={0} 
					className={classes.grid}
				>
					<Grid xs={9} sm={10} md={11} item>
						<Typography
							variant="subheading"
							noWrap
						>
							{name}
						</Typography>
					</Grid>
					<Grid 
						xs={3} sm={2} md={1}
						item
					>
						<Typography
							variant="caption"
							align="right"
							noWrap
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
	);
};

ChatMessage.propTypes = {
	uid: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	active: PropTypes.bool.isRequired,
	onEvent: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
};

ChatMessage.defaultProps = {
	uid: "" + Math.random(),
	name: "Default",
	time: (new Date()).toLocaleString("en", {
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	}),
	message: "Default",
	active: false,
	onEvent: (e) => {},
}

export default withStyles(styles, { withTheme: true })(ChatMessage);