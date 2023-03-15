import React, { useState } from "react";

function UseState() {
  const [inputs, setInputs] = useState({
    count: 0,
    artistName: "a",
    artistCompany: "b",
    artistGenre: "c",
    imageUri: "d",
    description: "e",
    realName: "f",
    account: "g",
    bank: "h",
  });

  const {
    count,
    artistName,
    artistCompany,
    artistGenre,
    imageUri,
    description,
    realName,
    account,
    bank,
  } = inputs;

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          //   setCount(count + 1);
          setInputs({ ...inputs, count: count + 1 });
          console.log(inputs);
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default UseState;
