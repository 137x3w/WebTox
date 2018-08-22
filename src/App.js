import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import './App.css';
import AppBar from './AppBar/AppBar';
import Drawer from './Drawer/Drawer';
import Menu from './Menu/Menu';
import Settings from './Settings/Settings';

import ChatContainer from './Chat/ChatContainer';

import ContactList from './ContactList/ContactList';

const styles = theme => ({});

class App extends Component {
  render() {
	const {
	  classes
	} = this.props;

	return (
	  <div className="App">
		{/*<AppBar
			menuOnClick={() => {}}
		/>
		<Drawer
			open={true}
		>
		  
		</Drawer>*/}
		{/*<ChatContainer />*/}

		<ContactList />
	  </div>
	);
  }
}

export default withStyles(styles, { withTheme: true })(App);
