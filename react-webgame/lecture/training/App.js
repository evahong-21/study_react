import React, { useState, useCallback } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [toDoList, setToDoList] = useState(['할일1']);
  const [value, setValue] = useState('');

  const openTodo = () => {
    const inOpen = isOpen;
    setIsOpen(!inOpen);
  };

  const onChangeForm = useCallback((e) => {
    setValue(e.target.value);
  });

  const inputList = () => {
    setToDoList([...toDoList, value]);
  };

  const hideTodo = () => {
    return (
      <div>
        <input value={value} onChange={onChangeForm} />
        <button onClick={() => inputList()}>추가</button>
        <br />
        {toDoList.map((v) => {
          return <p>{v}</p>;
        })}
      </div>
    );
  };

  return (
    <>
      <div>
        <button onClick={() => openTodo()}>{isOpen ? '닫기' : '열기'}</button>
        {isOpen ? hideTodo() : null}
      </div>
    </>
  );
}

export default App;
