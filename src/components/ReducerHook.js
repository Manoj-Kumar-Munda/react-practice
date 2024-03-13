import React, { useReducer, useState } from 'react'


const reducer = (state,action) => {
    switch(action.type){
        case "INCREMENT":
            return {
                count : state.count + 1,
                showText : state.showText
            }
        case "toggleShowText":
            return{
                count : state.count,
                showText : !state.showText
            }
    }
}

const ReducerHook = () => {
    const [count, setCount] = useState(0);
    const [showText,setShowText] = useState(true);

    //We will use useReducer() hook to manage the state of multiple vars.
    // const [state, dispatch] = useReducer(reducer, {count:0, showText : true})

    console.log("redering");

    
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1>{count}</h1>
        <button
            onClick={() => {
                setCount(count+1);
                setShowText(!showText);

                // dispatch({type:"INCREMENT"});
                // dispatch({type : "toggleShowText"})
            }}
            className='bg-blue-500 p-2 text-white font-bold cursor-pointer'
        >
            Click Here
        </button>
        { showText && <p>This is a text</p>}

    </div>
  )
}

export default ReducerHook