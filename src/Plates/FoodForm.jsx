import { Component, createRef } from "react";
import plates from "./FoodList";
import "./style.css";
export default class FoodForm extends Component {
  constructor(props) {
    super(props);
    this.listFood = plates;
    this.state = {
      valueInput: "",
      show: false,
      platsPossibl: [],
      affichage: false,
    };
  }

  handeSubmit = (e) => {
    e.preventDefault();
    const platsFiltrer = this.listFood.filter(
      (food) =>
        food.ingredient1 == this.state.valueInput ||
        food.ingredient2 == this.state.valueInput ||
        food.ingredient3 == this.state.valueInput ||
        food.ingredient4 == this.state.valueInput ||
        food.ingredient5 == this.state.valueInput ||
        food.ingredient6 == this.state.valueInput
    );
    this.setState({ platsPossibl: platsFiltrer });
    this.setState({ show: true });
    this.setState({ affichage: true });
  };
  render() {
    return (
      <div className="container mt-5">
        <h1>Enter your ingrediant</h1>
        <hr />
        <form onSubmit={this.handeSubmit} className="w-25 just m-auto ">
          <div className="mb-3 ">
            <label htmlFor="ing" className="form-label">
              Ingrediant
            </label>
            <input
              onChange={(e) => this.setState({ valueInput: e.target.value })}
              type="text"
              className="form-control"
              id="ing"
            />
          </div>
          <button type="submit" className="btn btn-primary ">
            Search
          </button>
        </form>
        <div style={{ display: "flex" }} className="m-5">
          {this.state.affichage ? (
            this.state.platsPossibl.length > 0 ? (
              this.state.platsPossibl.map((p, i) => (
                <div
                  className="card text-start"
                  key={i}
                  style={{
                    width: "300px",
                    height: "550px",
                  }}
                >
                  <img
                    className="card-img-top"
                    src={p.image}
                    style={{
                      backgroundImage: `url(${p.image})`,
                      height: "300px",

                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  />
                  <div className="card-body">
                    <h3 className="card-title">{p.plateName}</h3>
                    <h4 className="text-warning">Ingrediant pour cette repa</h4>
                    <ul>
                      <li>{p.ingredient1} </li>
                      <li>{p.ingredient2} </li>
                      <li>{p.ingredient3} </li>
                      <li>{p.ingredient4} </li>
                      <li>{p.ingredient5} </li>
                      <li>{p.ingredient6} </li>
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <div
                style={{ width: "100%" }}
                className="alert alert-danger"
                role="alert"
              >
                <strong>No repas </strong>
              </div>
            )
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
