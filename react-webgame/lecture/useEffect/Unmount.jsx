// const React = require("react");
// const { Component } = React;

// class Unmount extends Component {
//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//   }

//   render() {
//     return (
//       <div>
//         <p>test component unmount</p>
//       </div>
//     );
//   }
// }

// module.exports = Unmount;

import React, { useEffect } from "react";

function Unmount() {
  useEffect(() => {
    console.log("Unmount mount&update");
    return function cleanup() {
      console.log("componentWillUnmount");
    };
  });

  return (
    <div>
      <p>test component unmount</p>
    </div>
  );
}

export default Unmount;
