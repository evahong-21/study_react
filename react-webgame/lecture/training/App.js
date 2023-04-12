import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      const { count, max } = state;
      if (count < max) {
        return { ...state, count: count + 1 };
      } else {
        alert(`MAX ${max} 값에 도달했습니다.`);
        return { ...state };
      }
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'setMax':
      if (action.value < state.count) {
        return { ...state, max: action.value, count: action.value };
      } else {
        return { ...state, max: action.value };
      }
    default:
      throw new Error('Unsupported action type:', action.type);
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, max: 0 });
  const { count, max } = state;

  const handleIncrement = () => dispatch({ type: 'increment' });
  const handleDecrement = () => dispatch({ type: 'decrement' });
  const handleMax = (value) => dispatch({ type: 'setMax', value: value });

  return (
    <>
      MAX: <input type="number" value={max} onChange={(e) => handleMax(Number(e.target.value))} />
      <button onClick={() => handleIncrement()}>+</button>
      <button onClick={() => handleDecrement()}>-</button>
      <p>{count}</p>
    </>
  );
}

export default Counter;
