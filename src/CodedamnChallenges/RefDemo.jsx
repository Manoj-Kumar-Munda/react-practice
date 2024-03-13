import React, { useEffect } from 'react'
import { useState,useRef } from 'react'

const RefDemo = () => {
    const obj = useRef(5);
    const [counter, setCounter] = useState(0);
    useEffect(
        () => {
            console.log("render");
        }
    )

    const handleCount = () => {

        // console.log("ref1",obj);
        setCounter( (counter) => counter +1);

    }
  return (
    <div>
        <button onClick={() => {
            obj.current *= 5;
            console.log(obj)

        }}>
        Click
        </button>
        

        <h1>Counter : {counter}</h1>
    </div>
  )
}

export default RefDemo