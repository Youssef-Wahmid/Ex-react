import { useRef, useState } from "react";

export default function RcprColor() {
  const valeur = useRef("");
  const [clr, setClr] = useState("");
  const handelClick = () => {
    let cc = valeur.current.value;
    setClr(cc);
  };
  return (
    <>
      <h1 style={{ color: clr }}>{clr}</h1>
      <select ref={valeur}>
        <option value="red">red</option>
        <option value="orange">orange</option>
        <option value="green">green</option>
        <option value="gray">gray</option>
      </select>
      <button onClick={handelClick}>clcker</button>
    </>
  );
}
