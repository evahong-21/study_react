import React, { useState, useEffect } from "react";
import Unmount from "./Test";

function UseEffect() {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 같은 방식으로
  useEffect(() => {
    // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
    console.log("componentDidMount");
    document.title = `You clicked ${count} times`;
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate");
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    console.log("UseEffect mount&update");
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {count == 0 ? <Unmount /> : null}
    </div>
  );
}

export default UseEffect;
