import './App.css';
import React, { useState } from 'react';


class App extends React.Component {
  state = {
    reversedString: '', input: ''
  }
  checkPall = (string) => {
    const {reversedString, input} = this.state;
    let original = this.reverse(string)
    if (original === input) {
      return true;
    } else { return false }
  }
  reverse = (input) => {
    let pall = [];
    for (let i = input.length-1; i > -1; i--) {
      console.log(input[i])
      pall.push(String(input[i]))
    }
    return pall.join('')
  }
  clearOld = () => {
    this.setState({
      reversedString: ''
    })
  }
  handleSubmit = () => {
    const {reversedString, input} = this.state;
    this.clearOld()
    let pallendrome = this.reverse(input)
    let check = this.checkPall(pallendrome)
    if (check) {
      this.setState((prev) => ({
        reversedString: prev.reversedString.concat(pallendrome)
      }))
    }
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  render () {
    const {reversedString, input} = this.state;
    return (
      <div className="App">
        <input
        onChange={this.handleChange}
        value={input}
        ></input>
        <button
        onClick={this.handleSubmit}
        >Submit</button>
        <div>{reversedString}</div>
      </div>
    ) 
  }
}


export default App;
//LOOPS
// for (let i = 0; i < arr.length-1; i++)
// for (let i = arr.length - 1; i > -1; i--)

//CONCAT
    // let string = 'bla'
    // let strm = string.concat('m')
    // console.log(strm)
    // let arr = ['a', 'b', 'c']
    // let newArr = arr.concat('d')
    // console.log(newArr)