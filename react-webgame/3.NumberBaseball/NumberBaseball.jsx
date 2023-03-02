import React, { useRef, useState, useCallback } from 'react';
import Try from './Try'

const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
      const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      array.push(chosen);
    }
    return array;
  };


const NumberBaseball = () => {
    const [result, setResult] = useState(getNumbers());
    const [value, setValue] = useState('');
    const [tries, setTries] = useState([]);
    const [answer, setAnswer] = useState('');
    const inputEl = useRef(null);


    const onSubmitForm = useCallback((e)=>{
        e.preventDefault();
        console.log(result);
        setTries([...tries, value]);
        
    })

    const onChangeInput = useCallback((e)=> setValue(e.target.value), []);

    return (
        <>
            <h1>NumberBaseball</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} value={value} onChange={onChangeInput} />
                <button>submit</button>
            </form>
            <div>tries: {tries.length}</div>
            <ui>
                {tries && tries.map((v, i) => {return(<Try value={v} index={i}/>)})}
            </ui>
        </>
    );
}

export default NumberBaseball