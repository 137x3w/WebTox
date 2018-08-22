import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const styles = theme => ({});

const SettingsHeader = (props) => {
  const { 
    classes
  } = props;

  return (
    <div>
      <Toolbar>
        <IconButton color="inherit" aria-label="Back">
          <ArrowBackIcon />
        </IconButton>
      </Toolbar>
    </div>
  );
}

SettingsHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

SettingsHeader.defaultProps = {
  
}

export default withStyles(styles, { withTheme: true })(SettingsHeader);