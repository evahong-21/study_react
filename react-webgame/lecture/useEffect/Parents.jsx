import React from "react";

import Example2 from "./Example2";

const Parents = () => {
  const onOpen = () => {
    alert("open");
  };

  const onClose = () => {
    alert("close");
  };

  return (
    <div>
      <Example2 onOpen={onOpen} onClose={onClose} />
    </div>
  );
};

export default Parents;
