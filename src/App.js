import logo from "./logo.svg";
import "./App.css";
import Rcpr from "./Recperation/Rcpr";
import Somme from "./Recperation/Somme";
import RcprSelect from "./Recperation/RcprSelect";
import RcprColor from "./Recperation/RcprColor";
import RcprClass from "./Recperation/RcprClass";
import Class from "./Calculatrice/Class";
import FoodForm from "./Plates/FoodForm";

function App() {
  return (
    <div>
      {/* <Rcpr />
      <hr />
      <Somme />
      <hr />
      <RcprSelect />
      <hr />
      <RcprColor />
      <hr />
      <RcprClass />
      <hr /> */}
      <Class />

      <FoodForm />
    </div>
  );
}

export default App;
