import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import _Drawer from '@material-ui/core/Drawer';

import DrawerContainer from './DrawerContainer';

const anchor = "bottom";

const styles = theme => ({});

const Drawer = (props) => {
	const {
		open,
		children
	} = props;

	return (
		<div>
			<_Drawer
				variant="temporary"
				anchor={anchor}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				open={open}
			>
				{children}
			</_Drawer>
		</div>
	);
};

Drawer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Drawer);