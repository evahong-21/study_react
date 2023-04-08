import React, { useEffect, useState, useRef } from "react";

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
};

const scores = {
    가위: 1,
    바위: 0,
    보: -1,
};
  
const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v) {
      return v[1] === imgCoord;
    })[0];
  };

export default function RSP() {
    const [result, setResult] = useState('')
    const [imgCoord, setImgCoord] = useState(rspCoords.바위)
    const [score, setScore] = useState(0);
    const interval = useRef();

    useEffect(() => {
        // changHand() 로 하면 무한 랜더링 걸림 -> 그 이유가 뭔지
        // https://velog.io/@yeyo0x0/React-React-Hooks%EC%97%90%EC%84%9C-setInterval-%EC%82%AC%EC%9A%A9-%EB%AC%B8%EC%A0%9C
        interval.current = setInterval(changeHand, 1000)
        return() => {            
            clearInterval(interval.current)
        }
        
    },[imgCoord])

    const changeHand = () => {
        if (imgCoord === rspCoords.바위) {
            setImgCoord(rspCoords.가위);
          } else if (imgCoord === rspCoords.가위) {
            setImgCoord(rspCoords.보);
          } else if (imgCoord === rspCoords.보) {
            setImgCoord(rspCoords.바위);
          }
    }

    const onClickBtn = (choice) => () => {
        if (interval.current) {
            clearInterval(interval.current);
            interval.current = null;
            const myScore = scores[choice];
            const cpuScore = scores[computerChoice(imgCoord)];
            const diff = myScore - cpuScore;
            if (diff === 0) {
              setResult('비겼습니다!');
            } else if ([-1, 2].includes(diff)) {
              setResult('이겼습니다!');
              setScore((prevScore) => prevScore + 1);
            } else {
              setResult('졌습니다!');
              setScore((prevScore) => prevScore - 1);
            }
            setTimeout(() => {
              interval.current = setInterval(changeHand, 100);
            }, 1000);
          }
    }

    return (
        <>
        <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
        <div>
          <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
          <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
          <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </> 
    )

}