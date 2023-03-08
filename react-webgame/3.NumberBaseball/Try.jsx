import React, { Component } from 'react';

class Try extends Component {
    render() {
        return (
            <li>
                <div>try : {this.props.value.try} result : {this.props.value.result}</div>
            </li>
        )
    }
}

export default Try;