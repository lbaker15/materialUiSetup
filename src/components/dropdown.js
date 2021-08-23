import React from 'react';

let array = ['Option one', 'Option two', 'Option three']

class Dropdown extends React.PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextProps, nextState)
    //     return true;
    // }
    componentDidUpdate() {
        console.log('updated')
    }
    render() {
        return (
            <React.Fragment>
            
            </React.Fragment>
        )
    }
}

export default Dropdown;