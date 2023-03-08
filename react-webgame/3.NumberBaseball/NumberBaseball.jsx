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
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers);
    const [tries, setTries] = useState([]);

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        if (value === answer.join('')) {
            setResult('홈런');
            setTries([...tries, {try:value, result:'홈런!'}]);
        } else {
            if (tries.length >= 9) {
                setResult('10번 넘게 탈락! 정답 :' + answer.join(''));
                alert('게임을 다시 시작합니다.');
                setAnswer(getNumbers);
            } else {            
                const arr = value.split('');
                let strike = 0;
                let ball = 0;
                arr.map((v,i)=>{answer[i]==Number(v) ? strike++ : answer.includes(Number(v)) ? ball++ : null});
                setResult('땡!');
                setTries([...tries, {try: value, result:`스트라이크 : ${strike}, 볼: ${ball}`}])
            }
        }
    }
    );

    const onChangeForm = useCallback((e) => {
        setValue(e.target.value);
    }
    )


        return (
        <>
        <h1>{result}</h1>
        <form onSubmit={onSubmitForm}>
            <input maxLength={4} value={value} onChange={onChangeForm} /> 
        </form>
        <div>시도 : {tries.length}</div>
        <ul>
            {tries.map((v,i)=>{return(<Try key={`${i+1}차 시도:`} tryInfo={v}/>)})}</ul>    
        </>)
};

export default NumberBaseball;