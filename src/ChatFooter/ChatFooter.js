import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
	toolBar: {
		marginBottom: theme.spacing.unit,
	},

	/* Like material guide */
	/* textField: {backgroundColor: theme.palette.grey[100],borderRadius: theme.spacing.unit/2}, */

	input: {
		padding: theme.spacing.unit,
		/* ...theme.typography.caption */
	},

	/* Vertical align icon button */
	inputAdornment: { 
		maxHeight: "none",
	} 
});

const ChatFooter = (props) => {
	const {
		rows,
		onEvent,
		classes
	} = props;

	return (
		<React.Fragment>
			<Toolbar
				className={classes.toolBar}
			>
				<TextField
					multiline
					rows={rows}
					margin="normal"
					fullWidth
					placeholder="Type your message here"
					onFocus={ () => onEvent({ action: "FOCUS" }) }
					onBlur={ () => onEvent({ action: "BLUR" }) }

					InputProps={{
						classes: {
							input: classes.input
						},
						endAdornment: (
							<InputAdornment>
								<IconButton
									aria-label="Send message"
									onClick={ () => onEvent({ action: "SUBMIT" }) }
								>
									<SendIcon />
								</IconButton>
							</InputAdornment>
						)
					}}
				/>
			</Toolbar>
		</React.Fragment>
	);
}

ChatFooter.propTypes = {
	rows: PropTypes.string.isRequired,
	onEvent: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
};

ChatFooter.defaultProps = {
	rows: "1",
	onEvent: (e) => {},
}

export default withStyles(styles, { withTheme: true })(ChatFooter);