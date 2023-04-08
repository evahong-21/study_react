0. index.html의 <style> tag에 css 작성

1. Array.prototype.reduce(callback[,initialValue])
    acc(return 값), cur(현재 값), idx(현재 index), src(원본 배열) 4개의 인자를 갖는다.
    - accumulator(acc) : 콜백의 반환값을 누적. 콜백의 이전 반환값 또는, 콜백의 첫번째 호출이면서 initialValue를 제공한 경우에는 initialValue 값
    - currentValue(cur) : 처리할 현재 요소
    - currentIndex(idx) : 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작
    - array : reduce()를 호출할 배열

    ex) 
    [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
    });

    result.reduce((a, c) => a+c)

2. 삼항 연산자
    조건문 ? 조건문이 true 일 때 실행 : 조건문이 false 일 때 실행; 
    둘 중 하나에 처리할 것이 없다면 null 반환
    jsx 에서는 false, undefined, null 은 태그가 없음을 뜻함.

3. 함수 최적화(렌더링)
    - useMemo, useCallback 사용해서 관리

4. setTimeout / clearTimeout
5. useRef
    - state 와 ref 의 차이?
        - state 는 바뀌면 return 부분이 다시 랜더링 됨
        - 값이 바뀌어도 다시 랜더링 되지 않게 하기위한 값은 ref에 넣어 둠
        - 값이 바뀌긴 하지만 화면에 영향을 주고싶지 않을때 ref 를 씀