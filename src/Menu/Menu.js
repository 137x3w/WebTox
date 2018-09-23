import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import MenuHeader from '../MenuHeader/MenuHeader';
import MenuBody from '../MenuBody/MenuBody';

const styles = theme => ({});

const Menu = (props) => {
	const {
		onEvent,
		classes
	} = props;

	return (
		<div>
			<MenuHeader onEvent={onEvent} />
			<MenuBody onEvent={onEvent} />
		</div>
	);
};

Menu.propTypes = {
	classes: PropTypes.object.isRequired,
	onEvent: PropTypes.func.isRequired,
};

Menu.defaultProps = {
	onEvent: (e) => {},
};

export default withStyles(styles, { withTheme: true })(Menu);