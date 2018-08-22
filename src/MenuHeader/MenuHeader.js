import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '../Avatar/Avatar';

const styles = theme => ({
  userName: {
    marginTop: '0.5rem',
    fontWeight: 500,
  },
  title: {
    fontWeight: 400,
  }
});

const MenuHeader = (props) => {
  const { 
    classes,
    userName,
    title
  } = props;

  return (
    <div>
      
        <CardContent>
          <Avatar
            size={"big"}
          />
          <Typography 
            className={classes.userName}
            variant="body2" 
            noWrap
          >
            {userName}
          </Typography>
          <Typography
            className={classes.title}
            variant="body2" 
            noWrap
          >
            {title}
          </Typography>
        </CardContent>
    </div>
  );
}

MenuHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

MenuHeader.defaultProps = {
  userName: "UserUserUserUserUser",
  title: "TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle",
}

export default withStyles(styles, { withTheme: true })(MenuHeader);