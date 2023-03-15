const React = require("react");
const { Component } = React;

class UseStateClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  } // state 변수 선언

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

module.exports = UseStateClass; //state : { count : 0 } , this.setState()를 호출하는 버튼 클릭시 state.count 증가
