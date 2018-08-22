import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

import Avatar from '../Avatar/Avatar';

const styles = theme => ({
});

const MenuBody = (props) => {
  const { 
    classes,
  } = props;

  return (
    <div>
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SettingsRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
}

MenuBody.propTypes = {
  classes: PropTypes.object.isRequired,
};

MenuBody.defaultProps = {
}

export default withStyles(styles, { withTheme: true })(MenuBody);