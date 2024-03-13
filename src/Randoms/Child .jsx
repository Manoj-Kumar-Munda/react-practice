import React from 'react'

const Child  = ({data}) => {
    console.log("CHild");
    console.log(data);

    
  return (
    <div>Child 
        <p>{data}</p>
    </div>
  )
}

export default React.memo(Child); 