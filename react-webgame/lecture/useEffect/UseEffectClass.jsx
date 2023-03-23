const React = require("react");
const Unmount = require("./Unmount");
const { Component } = React;

class UseEffectClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // class 안의 두개의 생명주기 메서드에 같은 코드가 중복되어 있음.
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
    console.log("componentDidUpdate");
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
        {this.state.count === 5 ? <Unmount /> : null}
      </div>
    );
  }
}

module.exports = UseEffectClass;
