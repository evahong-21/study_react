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

3. 함수 최적화(렌더링)
    - useMemo, useCallback 사용해서 관리
