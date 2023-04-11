import React, { useCallback, useReducer } from "react";
import Table from "./Table";

const initialState = {
    winner : "AA",
    turn: '0',
    tableData : [["","",""],["","",""],["","",""]]
}

const SET_WINNER = "SET_WINNER";

const reducer = (state, action) => {
    switch (action.type) {
        case SET_WINNER:
            return {
                ...state,
                winner : action.winner,
            }
    }
}


const TicTakTo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // const [winner, setWinner] = useState("");
    // const [turn, setTurn] = useState("0");
    // const [tableData, setTableData] = useState([["","",""],["","",""],["","",""]])


    const onClickTable = useCallback(()=> {
        dispatch({type:SET_WINNER, winner: '0'})
    }, [])
    return (
        <>
            <Table onclick={onClickTable} tableData={state.tableData}/>
            {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    )


}

export default TicTakTo