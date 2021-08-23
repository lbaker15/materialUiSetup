import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/button'
import { createTheme, ThemeProvider, makeStyles, withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  test: {
    background: 'yellow'
  }
})

class ButtonMine extends React.Component {
    render() {
        return (
            <Button
            onClick={this.props.handleClick}
            color="primary" variant="contained"
            >Test</Button>
        )
    }
}

export default withStyles(styles)(ButtonMine)