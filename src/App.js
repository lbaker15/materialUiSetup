import './App.css';
import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Toolbar, CssBaseline } from '@material-ui/core';
import { createTheme, ThemeProvider, makeStyles, withStyles } from '@material-ui/core/styles';
import ButtonMine from './components/button';

const styles = theme => ({
  test: {
    background: 'white'
  }
})

class App extends React.Component {
  state = { darkState: false }
  handleClick = () => {
    this.setState((prev) => ({
      darkState: !prev.darkState
    }))
  }
  render () {
    const {darkState} = this.state;
    const {classes} = this.props;
    const primaryColor = '#f4f44f'; 
    const theme_custom = createTheme({
      palette: {
        primary: {
          main: primaryColor,
        },
      },
      typography: {
        h2: {
          color: 'black',
          fontWeight: 300
        }
      }
    })
    const dark_theme = createTheme({
      palette: {
        primary: {
          main: '#000'
        }
      }
    })
    return (

      <div className="App">
        <ThemeProvider theme={(!darkState) ? theme_custom : dark_theme}>

            <Container className={classes.test}>
              <Typography variant="h2">Text</Typography>
              <ButtonMine handleClick={this.handleClick} />
            </Container>

        </ThemeProvider>
      </div>
    ) 
  }
}


export default withStyles(styles)(App);
