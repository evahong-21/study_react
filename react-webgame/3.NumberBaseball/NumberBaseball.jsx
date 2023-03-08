import React, { useRef, useState, useCallback, Component } from 'react';
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

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.value === this.state.answer.join('')) {
            this.setState({result:'홈런',tries:[...this.state.tries, {try: this.state.value, result: '홈런!'}]})
        } else {
            if (this.state.tries.length >= 9) {
                this.setState({result:'10번 넘게 탈락! 정답 :' + this.state.answer.join('')});
                alert('게임을 다시 시작합니다.');
                this.setState({answer:getNumbers()});
            } else {            
                const arr = this.state.value.split('');
                let strike = 0;
                let ball = 0;
                console.log(arr, this.state.answer)
                arr.map((v,i)=>{this.state.answer[i]==Number(v) ? strike++ : this.state.answer.includes(Number(v)) ? ball++ : null});
                this.setState({result:'땡!', tries:[...this.state.tries, {try: this.state.value, result:`스트라이크 : ${strike}, 볼: ${ball}`}]})
            }
        }
    };

    onChangeForm = (e) => {
        console.log(this.state.answer);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        return (<><h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
            <input maxLength={4} value={this.state.value} onChange={this.onChangeForm} /> 
        </form>
        <div>시도 : {this.state.tries.length}</div>
        <ul>
            {this.state.tries.map((v,i)=>{return(<Try key={`${i+1}차 시도:`} value={v}/>)})}</ul>    
        </>)
    };
};

export default NumberBaseball;