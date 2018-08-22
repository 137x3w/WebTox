import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import SettingsHeader from '../SettingsHeader/SettingsHeader';
import SettingsBody from '../SettingsBody/SettingsBody';

const styles = theme => ({});

const Settings = (props) => {
	const {
    	classes,
	} = props;

	return (
		<div>
			<SettingsHeader/>
			<SettingsBody/>
		</div>
	);
};

Settings.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Settings);