import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import _Drawer from '@material-ui/core/Drawer';

const anchor = "bottom";

const styles = theme => ({});

const Drawer = (props) => {
	const {
		open,
		onEvent,
		children
	} = props;

	return (
		<div>
			<_Drawer
				variant="temporary"
				anchor={anchor}
				ModalProps={{
					/* Better open performance on mobile. */
					keepMounted: true,
				}}
				open={open}
				onClose={(e) => onEvent({action: "DRAWER_CLOSE"})}
			>
				{children}
			</_Drawer>
		</div>
	);
};

Drawer.propTypes = {
	open: PropTypes.bool.isRequired,
	onEvent: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
};

Drawer.defaultProps = {
	open: false,
	onEvent: (e) => {},
};

export default withStyles(styles, { withTheme: true })(Drawer);