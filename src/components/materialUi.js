import './App.css';
import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/button'
import Typography from '@material-ui/core/Typography'
import { Toolbar } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme, makeStyles, withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// const theme = createTheme({
//   // palette: {
//   //   type: 'dark',
//   //   primary: blue,
//   //   secondary: green
//   // },
//   palette: {
//     primary: {
//       main: '#5ed1ff'
//     },
//     secondary: {
//       main: '#3734eb'
//     }
//   },
//   typography: {
//     h4: {
//       // color: '#eb4034',
//       color: '#fff',
//       fontWeight: 200
//     }
//   }
// })

const styles = theme => ({
  colorLight: {
    background: '#f3f3f3',
    height: '100vh',
    width: '100vw',
    margin: 0
  },
  colorDark: {
    background: '#636363',
    height: '100vh',
    width: '100vw',
    margin: 0
  },
  btn: {
    marginTop: 200
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
    const palletType = darkState ? 'dark' : 'light';
    let primary = (darkState) ? '#000' : '#5ed1ff';
    let secondary = '#3734eb';
    const theme = createTheme({
      palette: {
        type: palletType,
        primary: {
          main: primary
        },
        secondary: {
          main: secondary
        }
      },
      typography: {
        h4: {
          color: '#fff',
          fontWeight: 200
        }
      }
    })
    const {classes} = this.props;
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
        <ElevationScroll>
          <AppBar>
            <Toolbar>
              <Typography variant="h4">
                Name
              </Typography>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Container className={(darkState) ? classes.colorDark : classes.colorLight}>
          <Button 
          className={classes.btn}
          variant="contained" 
          color="primary"
          onClick={this.handleClick}
          >Submit</Button>
        </Container>
        </ThemeProvider>
      </div>
    ) 
  }
}


export default withStyles(styles)(App);
