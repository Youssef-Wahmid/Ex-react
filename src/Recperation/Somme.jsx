import React, { useRef, useState } from "react";

export default function Somme() {
  const inputV1 = useRef();
  const inputV2 = useRef();

  const [somme, setSomme] = useState(0);
  const [nb1, setnb1] = useState(0);
  const [nb2, setnb2] = useState(0);

  const handelClick = () => {
    setnb1(Number(inputV1.current.value));
    setnb2(Number(inputV2.current.value));
    setSomme(nb1 + nb2);
    // setSomme(Number(inputV1.current.value) + Number(inputV2.current.value));
  };
  return (
    <>
      <h1>{somme}</h1>
      <input ref={inputV1} type="number" />
      <input ref={inputV2} type="number" />
      <button onClick={handelClick}>Somme</button>
    </>
  );
}
