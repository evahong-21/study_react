1. useReducer / Reducer

- useReducer : redux 기능을 들여옴

  - 규모가 작은 프로젝트에서 context API와 같이 사용
  - state 자체의 수를 줄이기 가능
    - 하나의 state와 setState로 통일 가능
  - dispatch 안에 지정해주는게 reducer 의 action

- Reducer

  - 규모가 큰 프로젝트에서 결국엔 사용해야함
  - 비동기 부분 처리를 위해 사용

2. useEffect

- 비동기 부분 처리를 위해 사용.
- 동기 부분에 set state 관련된 정보가 있으면 비동기로 변경해줘야함.

3. useCallback

- 함수를 저장함
- 컴포넌트 안에 있는 함수는 보통 사용.
- 불필요한 랜더링을 막기 위해 사용.

4. 불필요한 리랜더링 파악

- state 와 props 변화에 따라 확인.
- useEffect, useRef 로 확인
- React.memo 로 편하게 확인.
  - 요소들 중 바뀌면 적용, 아니면 저장
  - 반복문이 있을때 주로 사용.
- useMemo - 값을 저장.
