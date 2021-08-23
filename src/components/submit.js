import React from 'react';

class Submit extends React.Component {
    render() {
        const {printValue} = this.props;
        return (
            <React.Fragment>
                <button onClick={printValue}>
                    Submit
                </button>
            </React.Fragment>
        )
    }
}

export default Submit;