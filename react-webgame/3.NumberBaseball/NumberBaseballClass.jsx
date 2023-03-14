import React, { Component, createRef } from 'react';
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

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    // shouldComponentUpdate(nextProps, nextState, nextContext) {}

    // A -> B -> C -> D -> E -> F -> G 같이 props가 여러 단계로 전달 -> 쓸데없이 rendering 이 많이 발생 -> 오류 발생 가능성 높음
    // 되지 않고 A -> G로 바로 보내는 방법
    // (진화형) props -> context -> redux
    onSubmitForm = (e) => {
        const {value, answer, tries} = this.state;
        e.preventDefault();
        if (value === answer.join('')) {
            this.setState((prevState) => {
                return {
                    result:'홈런',
                    tries: [...prevState.tries, {try: value, result: '홈런!'}]}})
            this.inputRef.current.focus();
        } else {
            if (tries.length >= 9) {
                this.setState({result:'10번 넘게 탈락! 정답 :' + answer.join('')});
                alert('게임을 다시 시작합니다.');
                this.setState({answer:getNumbers()});
                this.inputRef.current.focus();
            } else {            
                const arr = value.split('');
                let strike = 0;
                let ball = 0;
                arr.map((v,i)=>{answer[i]==Number(v) ? strike++ : answer.includes(Number(v)) ? ball++ : null});
                this.setState((prevState) => {
                    return {
                        result:'땡!', 
                        tries:[...prevState.tries, {try: value, result:`스트라이크 : ${strike}, 볼: ${ball}`}]}})
                this.inputRef.current.focus();
            }
        }
    };

    onChangeForm = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    inputRef = createRef();
    // onInputRef = (c) => { this.inputRef = c; };

    render() {
        const {result, value, tries} = this.state;
        return (<><h1>{result}</h1>
        <form onSubmit={this.onSubmitForm}>
            <input ref={this.inputRef} maxLength={4} value={value} onChange={this.onChangeForm} /> 
        </form>
        <div>시도 : {tries.length}</div>
        <ul>
            {tries.map((v,i)=>{return(<Try key={`${i+1}차 시도:`} value={v}/>)})}</ul>    
        </>)
    };
};

export default NumberBaseball;