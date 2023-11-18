import { Component, createRef } from "react";
import "./style.css";
export default class Class extends Component {
  constructor(props) {
    super(props);
    this.valueInp = createRef("");

    this.state = {
      equation: "",
      bg: "",
    };
  }
  handelClick = (e) => {
    if (e.target.value != null) {
      this.setState({ equation: this.state.equation + e.target.value });
      this.setState({ bg: "rgb(170, 221, 170)" });
    } else {
    }
  };

  calculer = () => {
    let a = eval(this.state.equation);
    if (a == "" || a == null) {
      this.setState({ equation: 0 });
    } else {
      this.setState({ equation: a });
    }
  };

  clear = () => {
    this.setState({ equation: "" });
    this.setState({ bg: "" });
  };

  render() {
    return (
      <>
        <table border={0}>
          <tr>
            <th colSpan={3}>
              <input
                style={{ backgroundColor: this.state.bg, border: "1px solid" }}
                value={this.state.equation}
                type="text"
              />
            </th>
            <th>
              <button onClick={this.clear}>C</button>
            </th>
          </tr>
          <tr>
            <th>
              <button value={1} onClick={this.handelClick}>
                1
              </button>
            </th>
            <th>
              <button value={2} onClick={this.handelClick}>
                2
              </button>
            </th>
            <th>
              <button value={3} onClick={this.handelClick}>
                3
              </button>
            </th>
            <th>
              <button value={"+"} onClick={this.handelClick}>
                +
              </button>
            </th>
          </tr>
          <tr>
            <th>
              <button value={4} onClick={this.handelClick}>
                4
              </button>
            </th>
            <th>
              <button value={5} onClick={this.handelClick}>
                5
              </button>
            </th>
            <th>
              <button value={6} onClick={this.handelClick}>
                6
              </button>
            </th>
            <th>
              <button value={"-"} onClick={this.handelClick}>
                -
              </button>
            </th>
          </tr>
          <tr>
            <th>
              <button value={7} onClick={this.handelClick}>
                7
              </button>
            </th>
            <th>
              <button value={8} onClick={this.handelClick}>
                8
              </button>
            </th>
            <th>
              <button value={9} onClick={this.handelClick}>
                9
              </button>
            </th>
            <th>
              <button value={"*"} onClick={this.handelClick}>
                x
              </button>
            </th>
          </tr>
          <tr>
            <th>
              <button value={"="} onClick={this.calculer}>
                =
              </button>
            </th>
            <th>
              <button value={"."} onClick={this.handelClick}>
                .
              </button>
            </th>
            <th>
              <button value={0} onClick={this.handelClick}>
                0
              </button>
            </th>
            <th>
              <button value={"/"} onClick={this.handelClick}>
                /
              </button>
            </th>
          </tr>
        </table>
      </>
    );
  }
}
