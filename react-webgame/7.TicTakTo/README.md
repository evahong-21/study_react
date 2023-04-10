1. useReducer / Reducer

- useReducer : redux 기능을 들여옴

  - 규모가 작은 프로젝트에서 context API와 같이 사용
  - state 자체의 수를 줄이기 가능
    - 하나의 state와 setState로 통일 가능
  - dispatch 안에 지정해주는게 reducer 의 action

- Reducer
  - 규모가 큰 프로젝트에서 결국엔 사용해야함
  - 비동기 부분 처리를 위해 사용
