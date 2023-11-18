import { Component, createRef } from "react";

export default class RcprClass extends Component {
  constructor(props) {
    super(props);
    this.rec = createRef("");
    this.state = {
      para: "",
    };
  }

  handelClick = () => {
    this.setState({ para: this.rec.current.value });
  };
  render() {
    return (
      <div>
        <h1>{this.state.para}</h1>
        <input ref={this.rec} type="text" />
        <button onClick={this.handelClick}>Clicker</button>
      </div>
    );
  }
}
