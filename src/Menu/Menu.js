import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import MenuHeader from '../MenuHeader/MenuHeader';
import MenuBody from '../MenuBody/MenuBody';

const styles = theme => ({});

const Menu = (props) => {
	const {
		classes
	} = props;

	return (
		<div>
			<MenuHeader/>
			<MenuBody/>
		</div>
	);
};

Menu.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Menu);