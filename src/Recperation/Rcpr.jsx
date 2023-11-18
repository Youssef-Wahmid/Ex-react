import React, { useRef, useState } from "react";

export default function Rcpr() {
  const [valeur, setValeur] = useState("");

  const inputValue = useRef("");

  const handelChange = () => {
    setValeur(inputValue.current.value);
  };

  return (
    <div>
      <h1>{valeur}</h1>
      <input ref={inputValue} type="text" onChange={handelChange} />
    </div>
  );
}
