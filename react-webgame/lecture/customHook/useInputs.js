import React, { useState } from "react";

const useInputs = () => {
    const [value, setValue] = useState("");

    const handleTextbox = (e) => {
      setValue(e.target.value);
    }

    const renderTextbox = () => {
        return(
            <div>
                <input type="text" value={value} onChange={handleTextbox} /> {value}
            </div>
        );
    }

    return renderTextbox;
}

export default useInputs;