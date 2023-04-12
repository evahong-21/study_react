import React, { useReducer } from 'react';

const calculator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setA':
      return {
        ...state,
        a: action.value,
        result: calculator[state.opertator](action.value, state.b),
      };
    case 'setB':
      return {
        ...state,
        b: action.value,
        result: calculator[state.opertator](state.a, action.value),
      };
    case 'setOperator':
      return {
        ...state,
        opertator: action.value,
        result: calculator[action.value](state.a, state.b),
      };
    default:
      throw new Error('Unsupported action type:', action.type);
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { result: 0, a: 0, b: 0, opertator: '+' });
  return (
    <>
      <input
        type="number"
        value={state.a}
        onChange={(e) => dispatch({ type: 'setA', value: Number(e.target.value) })}
      />
      <select
        value={state.opertator}
        onChange={(e) => dispatch({ type: 'setOperator', value: e.target.value })}
      >
        {Object.entries(calculator).map(([key, value]) => (
          <option value={key} key={key}>
            {key}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={state.b}
        onChange={(e) => dispatch({ type: 'setB', value: Number(e.target.value) })}
      />
      =
      <input type="number" value={state.result} readOnly={true} />
    </>
  );
}

export default App;
