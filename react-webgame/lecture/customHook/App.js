import React, { useEffect, useState } from "react"
import {useChecks} from "./useChecks";
import useInputs from "./useInputs";
import useAlert from "./useAlert";

const labels = ['check 1', 'check 2', 'check 3'];
const colors = ["red", "green", "blue"];

function App() {
  const [isAllChecked, renderChecked] = useChecks(labels);

  const renderTextbox1 = useInputs();
  const renderTextbox2 = useInputs();

  const [color, setColor] = useState("red");
  const handleSelectbox = (e) => {
    setColor(e.target.value);
  }

  const [alert, setAlert] = useState({isShow: false, contents: ""});
  const handleAlert = (contents) => {
    setAlert({isShow: true, contents: contents});
    setTimeout(() => setAlert({...alert, isShow: false}), 1000);
  }

  return (
    <>
      <div>
        {alert.isShow 
          ? <div> {alert.contents}</div>
          : ''
        }
        <button onClick={() => handleAlert('문제가 발생했습니다.')}>Warn</button>
        <button onClick={() => handleAlert('성공했습니다.')}>Success</button>
        <button onClick={() => handleAlert('초기화했습니다.')}>Init</button>
      </div>


      <div>
        {renderChecked()}
        <button disabled={!isAllChecked}>다음</button>
      </div>

      {/* https://poiemaweb.com/html5-tag-forms */}
      {renderTextbox1()}
      {renderTextbox2()}

      <select value={color} onChange={handleSelectbox}>
        {colors.map((c) => (
          <option value={c}>{c}</option>
        ))}
      </select>
      
      <div>
      {colors.map((c) => (
        <label>
          <input
            type='checkbox'
            checked={ c === color}
            onChange={() => setColor(c)}
          />
          {c}
        </label>
      ))}
      </div>
     
      <div style={{background: color, width: "100px", height: "100px"}}></div>
    
      <div>
        {/* {renderAlert()} */}
        <button onClick={() => handleAlert('문제 발생!')}>Warn</button>
        <button onClick={() => handleAlert('성공!')}>Success</button>
      </div>  
    </>
  );
}

export default App;