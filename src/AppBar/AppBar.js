import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import _AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import AppBarContainer from './AppBarContainer';

const styles = theme => ({
  appBar: {
    position: 'absolute',

    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
});

const AppBar = (props) => {
	const {
    classes,
		menuOnClick,
    open,
    children
	} = props;

	return (
		<div>
	  	<_AppBar 
        className={
          classNames(classes.appBar)
        }
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={menuOnClick}
          >
            <MenuIcon />
          </IconButton>
          {children}
        </Toolbar>
      </_AppBar>
		</div>
	);
};

AppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppBar);