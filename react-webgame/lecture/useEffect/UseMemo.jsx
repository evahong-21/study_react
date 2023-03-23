import React, { useState, useEffect, useMemo } from "react";

const Example1 = () => {
  const [items, setItems] = useState([0]);
  // const [total, setTotal] = useState(0);
  const total = useMemo(() => {
    return items.reduce((total, item) => total + item, 0);
  }, [items]);

  // useEffect(() => {
  //   setTotal(items.reduce((total, item) => total + item, 0));
  // }, [items]);

  const onClickButton = () => {
    setItems([...items, items.length]);
  };

  return (
    <div>
      <p>
        You clicked {items.length - 1} times, total : {total}
      </p>
      <button onClick={onClickButton}>Click me</button>
    </div>
  );
};

export default Example1;
