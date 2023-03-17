import React, { useState, useEffect } from "react";

// const Example2 = ({ onOpen, onClose }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       onOpen();
//     } else {
//       onClose();
//     }
//   }, [isOpen]);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setIsOpen(!isOpen);
//         }}
//       >
//         Toggle quick view
//       </button>
//     </div>
//   );
// };

// export default Example2;

const Example2 = ({ onOpen, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    console.log(`before ${isOpen}`);
    const nextIsOpen = !isOpen;
    setIsOpen(nextIsOpen);
    console.log(`after ${isOpen}`);

    if (nextIsOpen) {
      onOpen();
    } else {
      onClose();
    }
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle quick view</button>
    </div>
  );
};

export default Example2;
