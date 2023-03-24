import React from "react"
import { useChecks } from "./useChecks";

const labels = ['check 1', 'check 2', 'check 3'];

function App() {
    const [isAllChecked, renderChecks] = useChecks(labels);
  return (
    <div>
        {renderChecks()}
      <p>
        <button disabled={!isAllChecked}>다음</button>
      </p>
    </div>
  );
}

export default App;