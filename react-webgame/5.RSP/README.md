1. 라이프사이클
   클래스의 경우
   constructor -> render -> ref -> componentDidMount(비동기 요청 주로 함)
   -> setState/props 바뀔때 -> shouldComponentUpdate(if true) -> render -> componentDidUpdate
   -> 부모가 나를 없앤다면 -> componentWillUnmount(비동기 요청 정리) -> 소멸

2. setTimeout()/setInterval()

   - setTimeout()

     - 어떤 코드를 바로 실행하지 않고 일정 시간 기다린 후 실행해야하는 경우
     - 파라미터
       - 첫번째 인자 : 실행할 코드를 담은 함수
       - 두번째 인자 : 지연 시간을 밀리초(ms) 단위로 받음
       - 세번째 인자 이후 : 가변인자 (첫번째 인자인 함수가 인풋값이 필요한 경우 이 값을 명시해줌)
     - clearTimeout() 함수 호출 시 기다렸다 실행될 timeout 코드를 취소할 수 있음.

   - setInterval()
     - 웹페이지의 특정 부분을 주기적으로 업데이트 하거나 어떤 API로부터 변경된 데이터를 주기적으로 받아와야할 때
     - setTimeout()과 비슷하지만 해당 함수를 일정한 시간 간격을 두고 반복해서 실행함
     - 파라미터
       - 첫번째 인자 : 실행할 코드를 담은 함수
       - 두번째 인자 : 지연 시간을 밀리초(ms) 단위로 받음

3. 고위함수/고차함수

   - forEach, map, find, findIndex, filter, reduce, sort
     함수명 = () = () => {

   }

4. Object.entries
  - for...in 과 같은 순서로 주어진 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환
  - .find()
    - 주어진 판별함수를 만족하는 첫번째 요소의 값을 반환
    - 만족하는 요소가 없다면 undefined 반환
  - .findIndex()
    - 주어진 판별함수를 만족하는 배열의 첫번째 요서에 대한 인덱스 반환
    - 만족하는 요소가 없으면 -1 반환

5. custom hook
