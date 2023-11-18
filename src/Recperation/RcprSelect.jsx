import React, { useRef, useState } from "react";

export default function RcprSelect() {
  const operator = useRef("");
  const nb1 = useRef(0);
  const nb2 = useRef(0);

  const [calc, setCalc] = useState(Number);
  const handelClick = () => {
    let op = operator.current.value;
    let n1 = Number(nb1.current.value);
    let n2 = Number(nb2.current.value);

    switch (op) {
      case "+":
        setCalc(n1 + n2);
        break;
      case "-":
        setCalc(n1 - n2);
        break;
      case "*":
        setCalc(n1 * n2);
        break;
      case "/":
        setCalc(n1 / n2);
        break;
    }
  };

  return (
    <div>
      <h1>{calc}</h1>
      <select ref={operator}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input ref={nb1} type="text" />
      <input ref={nb2} type="text" />
      <button onClick={handelClick}>Claculer</button>
    </div>
  );
}
