import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import InboxIcon from '@material-ui/icons/Inbox';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import Switch from '@material-ui/core/Switch';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const styles = theme => ({});

const SettingsBody = (props) => {
  const { 
    classes,
  } = props;

  return (
    <div>
      <List 
        component="nav"
        subheader={
          <ListSubheader component="div" disableSticky>Common</ListSubheader>
        }
      >
        <ListItem button>
          <ListItemText primary="Language" secondary="English" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Show contacts' status" />
          <ListItemSecondaryAction>
            <Switch />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary="Faux offline messaging" />
          <ListItemSecondaryAction>
            <Switch />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary="Autoaccept files" />
          <ListItemSecondaryAction>
            <Switch />
          </ListItemSecondaryAction>
        </ListItem>
      </List>

      <List 
        component="nav"
        subheader={
          <ListSubheader component="div" disableSticky>Chat</ListSubheader>
        }
      >
        <ListItem button>
          <ListItemText primary="Text style format" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Notify" />
          <ListItemSecondaryAction>
            <Switch />
          </ListItemSecondaryAction>
        </ListItem>
      </List>

      <List 
        component="nav"
        subheader={
          <ListSubheader component="div" disableSticky>Privacy</ListSubheader>
        }
      >
        <ListItem>
          <ListItemText primary="Sending typing notifications" />
          <ListItemSecondaryAction>
            <Switch />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary="Keep chat history" />
          <ListItemSecondaryAction>
            <Switch />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button>
          <ListItemText primary="NoSpam" secondary="00000000" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="BlackList" />
        </ListItem>
      </List>

      <List 
        component="nav"
        subheader={
          <ListSubheader component="div" disableSticky>Connection</ListSubheader>
        }
      >
        <ListItem>
          <ListItemText primary="Enable IPv6 (recommended)" />
          <ListItemSecondaryAction>
            <Switch />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary="Enable UDP (recommended)" />
          <ListItemSecondaryAction>
            <Switch />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary="Enable LAN discovery" />
          <ListItemSecondaryAction>
            <Switch />
          </ListItemSecondaryAction>
        </ListItem>
      </List>

      <List 
        component="nav"
        subheader={
          <ListSubheader component="div" disableSticky>About</ListSubheader>
        }
      >
        
      </List>      

    </div>
  );
}

SettingsBody.propTypes = {
  classes: PropTypes.object.isRequired,
};

SettingsBody.defaultProps = {
}

export default withStyles(styles, { withTheme: true })(SettingsBody);