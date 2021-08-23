
function App(props) {
  const [count, setCount] = useState(0)
  const [countArr, setCountArr] = useState([])
  useEffect(() => {
    console.log(countArr,count)
  }, [count, countArr])

  return (
    <div>
      <button
      onClick={() => setCount(count+1)}
      >Click</button>
      <button
      onClick={() => setCountArr(countArr.concat('a'))}
      >Click</button>
    </div>
  )
}
// class App extends React.Component {
//   state = {
//     input: ''
//   }

//   handleChange = (e) => {
//     this.setState({
//       input: e.target.value
//     })
//   }
//   render () {
//     const {reversedString, input} = this.state;
//     return (
//       <div className="App">
//         <input
//         onChange={this.handleChange}
//         value={input}
//         ></input>
//         <Dropdown input={input} />
//       </div>
//     ) 
//   }
// }
